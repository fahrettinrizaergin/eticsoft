import React from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
  icon?: string;
  iconBgColor?: string;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  image,
  className = "",
  icon
}) => {
  return (
    <div
      className={`max-h-64 h-full border border-gray-200 rounded-lg flex items-center ${className}`}
    >
      <article className="p-4 space-y-4">
        {image && <img src={image} alt={title} width={50} className="h-full" />}
        <div className={`w-12 h-12 flex items-center justify-center rounded bg-blue-50`} >
          <i className={`${icon} text-2xl text-blue-900`} />
        </div>
        
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </article>
    </div>
  );
};

export default CardComponent;
