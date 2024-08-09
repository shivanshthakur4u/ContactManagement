interface CommonButtonProps {
  title: string;
  onPress?: () => void;
  type: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  onPress,
  type,
}) => {
  return (
    <button
      onClick={onPress}
      className={`${
        type === "cancel"
          ? "bg-gray-100 text-gray-600 font-medium text-base px-4 py-2  mb-4 place-self-center duration-300 transition-all border rounded-md hover:border-gray-300 hover:border hover:bg-white hover:text-gray-500"
          : type === "delete"
          ? "bg-red-500 text-white font-medium text-base px-4 py-2  mb-4 place-self-center duration-300 transition-all border rounded-md hover:border-red-500 hover:border hover:bg-white hover:text-red-500"
          : type === "edit"
          ? "bg-green-500 text-white font-medium text-base px-4 py-2  mb-4 place-self-center duration-300 transition-all border rounded-md hover:border-green-500 hover:border hover:bg-white hover:text-green-500"
          : "bg-blue-700 text-white font-medium text-base px-4 py-2  mb-4 place-self-center duration-300 transition-all border rounded-md hover:border-blue-700 hover:border hover:bg-white hover:text-blue-700"
      }`}
    >
      {title}
    </button>
  );
};

export default CommonButton;
