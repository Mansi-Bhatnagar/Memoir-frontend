interface primaryBtnProps {
  name: string;
  onClick?: () => void;
}
const PrimaryButton = ({ name, onClick }: primaryBtnProps) => {
  return (
    <button
      onClick={onClick}
      className="mr-5 w-20 rounded-md bg-white py-2 font-medium hover:bg-white/80"
    >
      {name}
    </button>
  );
};

export default PrimaryButton;
