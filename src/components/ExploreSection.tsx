import React from 'react';

interface ExploreSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ExploreSection: React.FC<ExploreSectionProps> = ({ title, description, children }) => {
  return (
    <section className="my-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>
      {children}
    </section>
  );
};

export default ExploreSection;