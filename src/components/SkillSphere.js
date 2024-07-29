import React from 'react';

function SkillSphere({ icon, label }) {
  return (
    <div className="w-32 h-32 md:w-44 md:h-44 m-2 md:m-4 relative group" aria-label={label}>
      <div className="w-full h-full flex items-center justify-center rounded-full bg-cardBackground shadow-lg">
        <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-accent rounded-full">
          {icon}
        </div>
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cardBackground text-accent text-sm md:text-2xl rounded-full p-2"
        role="tooltip"
      >
        {label}
      </div>
    </div>
  );
}

export default SkillSphere;
