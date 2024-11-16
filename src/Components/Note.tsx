import parse from "html-react-parser";

const Note = ({ content, title }: { content: string; title?: string }) => {
  return (
    <div className="h-52 w-80 rounded-md bg-zinc-800 text-white">
      <h5 className="mb-2 rounded-t-md bg-zinc-600 px-5 py-2 text-lg font-medium">
        {title || "Untitled"}
      </h5>
      <p className="p-5 text-sm">{parse(content)}</p>
    </div>
  );
};

export default Note;
