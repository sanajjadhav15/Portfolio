import React from 'react';

function SkillSphere({ icon, label }) {
  return (
    <div className="w-32 h-32 md:w-44 md:h-44 m-2 md:m-4 relative group" aria-label={label}>
      <div className="w-full h-full flex items-center justify-center rounded-full bg-gradient-card shadow-card border border-accent/20 hover:border-accent/50 transition-all duration-500 hover:shadow-glow transform hover:scale-110">
        <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-gradient-to-br from-accent to-secondary rounded-full text-white hover:from-tertiary hover:to-accent transition-all duration-500">
          {icon}
        </div>
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-cardBackground/95 to-primary/95 backdrop-blur-sm text-accent text-sm md:text-lg font-semibold rounded-full p-2 border border-accent/30"
        role="tooltip"
      >
        {label}
      </div>
    </div>
  );
}

export default SkillSphere;
