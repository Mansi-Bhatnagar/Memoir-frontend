import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import GhostButton from "../Components/Buttons/GhostButton";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import "react-quill/dist/quill.snow.css";

const CreateNote = () => {
  const navigate = useNavigate();
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["clean"], // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  //States
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  //Handlers
  const cancelHandler = () => {
    setValue("");
    setTitle("");
    navigate(-1);
  };

  return (
    <div className="mx-auto min-h-screen p-8 max-sm:p-4 max-sm:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-2 max-sm:[&>button]:flex-grow max-sm:justify-center">
        <PrimaryButton name="Save" />
        <GhostButton name="Cancel" onClick={cancelHandler} />
      </div>
      <div className="mx-auto mt-10 w-full max-w-7xl">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Title"
          className="w-full border-transparent bg-transparent pb-3 text-5xl text-white outline-none placeholder:text-white/50 focus-within:border-b focus-within:border-b-white"
        />
      </div>
      <ReactQuill
        modules={module}
        className="mx-auto w-full max-w-7xl pt-8 [&_div]:text-lg [&_div]:text-white last:[&_div]:min-h-80"
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Type your note here..."
      />
    </div>
  );
};

export default CreateNote;
