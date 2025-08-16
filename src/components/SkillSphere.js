import React from 'react';

function SkillSphere({ icon, label }) {
  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 m-1 sm:m-2 lg:m-3 xl:m-4 relative group" aria-label={label}>
      <div className="w-full h-full flex items-center justify-center rounded-full bg-gradient-card shadow-card border border-accent/20 hover:border-accent/50 transition-all duration-500 hover:shadow-glow transform hover:scale-110">
        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 flex items-center justify-center bg-gradient-to-br from-accent to-secondary rounded-full text-white hover:from-tertiary hover:to-accent transition-all duration-500">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {icon}
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-cardBackground/95 to-primary/95 backdrop-blur-sm text-accent text-xs sm:text-sm md:text-base lg:text-lg font-semibold rounded-full p-1 sm:p-2 border border-accent/30"
        role="tooltip"
      >
        {label}
      </div>
    </div>
  );
}

export default SkillSphere;
