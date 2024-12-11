import { ReactNode, useEffect, useRef, MouseEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = "",
  children,
  footer,
  closeOnOutsideClick = true,
  closeOnEscape = true,
  className = "",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      modalContentRef.current?.focus();
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function handleOutsideClick(e: MouseEvent) {
    if (
      closeOnOutsideClick &&
      modalRef.current &&
      !modalRef.current.contains(e.target as Node)
    ) {
      onClose();
    }
  }

  function handleEscapeKey(e: KeyboardEvent) {
    if (closeOnEscape && e.key === "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ease-out ${isOpen ? "opacity-100" : "opacity-0"}`}
      onClick={handleOutsideClick}
      aria-hidden={!isOpen}
    >
      <div
        ref={modalContentRef}
        className={`relative w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${className}`}
        style={{
          transform: isOpen ? "scale(1)" : "scale(0.9)",
        }}
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
      >
        <div className="flex justify-between items-center px-6 py-3 border-b border-solid border-gray-300">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
          <button
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✖
          </button>
        </div>
        <div className="p-6">{children}</div>
        {footer && (
          <div className="p-6 mt-4 border-t border-solid border-gray-300">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
