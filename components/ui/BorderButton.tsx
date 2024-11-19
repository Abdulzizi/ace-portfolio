export type BorderButtonProps = {
  content: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
};

const BorderButton = ({
  content,
  icon,
  position,
  handleClick,
  otherClasses,
}: BorderButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`relative w-full md:w-60 lg:w-72 xl:w-72  inline-flex items-center justify-center px-4 py-3 rounded-lg border-2 border-indigo-500 text-indigo-500 font-semibold md:text-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-indigo-500 hover:text-white group gap-2 ${otherClasses}`}
    >
      {position === "left" && icon}
      {content}
      {position === "right" && icon}

      {/* Border effect */}
      <div className="border-2 border-indigo-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" />
    </button>
  );
};

export default BorderButton;
