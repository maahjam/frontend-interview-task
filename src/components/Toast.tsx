import { ReactNode, useEffect } from "react";
import { ToastType } from "../types/toast";
import { CrossIcon, ExclamationIcon, TickIcon } from "../assets/icons";
import useStore from "../store/useStore";

interface ToastProps {
  message: string;
  type: ToastType;
  id: number;
  index: number;
}

const typeStyles: Record<ToastType, string> = {
  success: "bg-gradient-to-r from-green-400 via-green-500 to-green-600 border-green-500",
  error: "bg-gradient-to-r from-red-400 via-red-500 to-red-600 border-red-500",
  warning: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 border-yellow-500",
};

const typeIcon: Record<ToastType, ReactNode> = {
  success: <TickIcon />,
  error: <CrossIcon />,
  warning: <ExclamationIcon />,
};

const Toast: React.FC<ToastProps> = ({ message, type, id, index }) => {
  const removeToast = useStore((state) => state.removeToast);

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 5000); 

    return () => clearTimeout(timer); 
  }, [id, removeToast]);

  return (
    <div
      style={{ bottom: `${index * 5.5 + 3.5}rem` }} 
      className={`sticky left-1/2 transform -translate-x-1/2 w-80 max-w-full p-4 h-20 max-h-20 border-4 rounded-2xl flex items-center justify-between shadow-xl transition-all duration-300 ease-in-out opacity-100 ${typeStyles[type]}`}
    >
      <div className="flex items-center gap-3">
        {typeIcon[type]}
        <span className="text-white text-sm sm:text-base font-semibold">{message}</span>
      </div>
      <button
        className="ml-3 text-white hover:text-opacity-90 focus:outline-none transition-colors"
        onClick={() => removeToast(id)}
        aria-label="Close toast"
      >
        ✖
      </button>
    </div>
  );
};

export default Toast;
