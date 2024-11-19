import PrimaryButton from "../Components/Buttons/PrimaryButton";
import GhostButton from "../Components/Buttons/GhostButton";
import logo from "../assets/Memoir1.png";
import { PlusIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import Note from "../Components/Note";

const Home = () => {
  const navigate = useNavigate();

  //Handlers
  const addNoteHandler = () => {
    navigate("/create-note");
  };

  const loginHandler = () => {
    navigate("/auth?tab=login");
  };

  const signupHandler = () => {
    navigate("/auth?tab=signup");
  };

  return (
    <div className="mx-auto min-h-screen w-screen max-w-7xl">
      <nav className="flex items-center justify-between pt-4">
        <img src={logo} alt="logo" className="h-24 w-auto" />
        <div>
          <PrimaryButton name="Login" onClick={loginHandler} />
          <GhostButton name="Signup" onClick={signupHandler} />
        </div>
      </nav>
      <button
        onClick={addNoteHandler}
        className="mt-8 flex w-36 items-center justify-center gap-1 rounded-md py-2 transition-all duration-300 ease-in-out hover:bg-zinc-800"
      >
        <PlusIcon className="h-5 w-5 text-white" />
        <span className="text-white">Add a note</span>
      </button>
      <div className="mt-8 flex items-start gap-8">
        <Note content='<h1><strong style="color: rgb(0, 102, 204);"><em>Hello world</em></strong></h1>' />
      </div>
    </div>
  );
};

export default Home;
