const PrimaryButton = ({ name }: { name: string }) => {
  return (
    <button className="mr-5 w-20 rounded-md bg-white py-2 font-medium hover:bg-white/80">
      {name}
    </button>
  );
};

export default PrimaryButton;
