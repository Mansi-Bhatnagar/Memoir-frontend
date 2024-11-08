interface ghostBtnProps {
  name: string;
  onClick?: () => void;
}
const GhostButton = ({ name, onClick }: ghostBtnProps) => {
  return (
    <button
      onClick={onClick}
      className="font-mediums w-20 rounded-md py-2 text-white transition-all duration-300 ease-in-out hover:bg-zinc-800"
    >
      {name}
    </button>
  );
};

export default GhostButton;
