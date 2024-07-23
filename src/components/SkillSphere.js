import React from 'react';

function SkillSphere({ icon, label }) {
  return (
    <div className="w-28 h-28 m-2 relative group" aria-label={label}>
      <div className="w-full h-full flex items-center justify-center rounded-full bg-cardBackground shadow-lg">
        <div className="w-20 h-20 flex items-center justify-center bg-accent rounded-full">
          {icon}
        </div>
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cardBackground text-accent text-sm rounded-full p-2"
        role="tooltip"
      >
        {label}
      </div>
    </div>
  );
}

export default SkillSphere;
