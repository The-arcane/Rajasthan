import React from 'react';

interface DestinationCardProps {
  title: string;
  description: string;
  image: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ title, description, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-1">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="absolute bottom-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;