import React from 'react';

interface NoImageProps {
  className?: string;
}

const NoImage: React.FC<NoImageProps> = ({ className }) => {
  return (
    <div
      className={`bg-gray-400 flex justify-center font-bold items-center ${className}`}
    >
      Image Not Found
    </div>
  );
};

export default NoImage;
