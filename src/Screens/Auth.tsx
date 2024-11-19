import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { useSearchParams } from "react-router-dom";

interface InputProps {
  id: string;
  type: string;
  label: string;
  icon: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
}

const FloatingLabelInput = ({
  id,
  type,
  label,
  icon,
  value = "",
  onValueChange,
}: InputProps) => {
  //States
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  //Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <div className="relative mb-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {icon}
      </div>
      <input
        type={type}
        id={id}
        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent pb-1 pl-10 pt-4 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0"
        placeholder=" "
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        htmlFor={id}
        className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
          isFocused || value ? "text-black" : "text-gray-500"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //States
  const [activeTab, setActiveTab] = useState("signup");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Handlers
  const changeTabHandler = (tab: string) => {
    setEmail("");
    setPassword("");
    setUsername("");
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const usernameHandler = (value: string) => {
    setUsername(value);
  };

  const emailHandler = (value: string) => {
    setEmail(value);
  };

  const passwordHandler = (value: string) => {
    setPassword(value);
  };

  //Effects
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "login" || tab === "signup") {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        layout
        style={{ height: activeTab === "signup" ? "320px" : "280px" }}
        className="h-80 w-96 rounded-md bg-white"
      >
        <div className="relative flex items-center justify-center px-5 py-3">
          <motion.div
            className="absolute inset-0 m-3"
            animate={{
              x: activeTab === "signup" ? "0%" : "100%",
              width: "180px",
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          >
            <div className="h-full rounded-md bg-black" />
          </motion.div>
          <button
            onClick={() => changeTabHandler("signup")}
            className={`${
              activeTab === "signup"
                ? " text-white "
                : "transparent hover:text-gray-600"
            } p-2 relative z-10 transition-colors duration-200 rounded-md w-1/2 text-lg `}
          >
            Sign up
          </button>
          <button
            onClick={() => changeTabHandler("login")}
            className={`${
              activeTab === "login"
                ? " text-white "
                : "transparent hover:text-gray-600"
            } p-2 relative z-10 transition-colors duration-200 rounded-md w-1/2 text-lg`}
          >
            Login
          </button>
        </div>
        <form key={activeTab} className="px-5">
          {activeTab === "signup" && (
            <FloatingLabelInput
              id="username"
              type="text"
              label="Username"
              icon={<UserIcon className="h-5 w-5 text-gray-500" />}
              value={username}
              onValueChange={usernameHandler}
            />
          )}
          <FloatingLabelInput
            id="email"
            type="email"
            label="Email"
            icon={<EnvelopeIcon className="h-5 w-5 text-gray-500" />}
            value={email}
            onValueChange={emailHandler}
          />
          <FloatingLabelInput
            id="password"
            type="password"
            label="Password"
            icon={<LockClosedIcon className="h-5 w-5 text-gray-500" />}
            value={password}
            onValueChange={passwordHandler}
          />
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-black py-2 text-white transition-colors duration-200 hover:bg-gray-800"
          >
            {activeTab === "signup" ? "Sign Up" : "Login"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Auth;
