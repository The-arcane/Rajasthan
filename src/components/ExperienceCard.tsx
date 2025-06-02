import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="w-8 h-8 text-orange-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ExperienceCard;