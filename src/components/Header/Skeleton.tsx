import React from "react";

export const Skeleton = () => {
  return (
    <section className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700/50">
      <div className="animate-pulse w-full max-w-4xl px-4">
        <div className="h-56 bg-gray-600/70 rounded-lg mb-6"></div>
        <div className="space-y-4">
          <div className="h-10 w-3/4 bg-gray-600/70 rounded-lg mx-auto"></div>
          <div className="h-8 w-2/4 bg-gray-600/70 rounded-lg mx-auto"></div>
          <div className="h-24 bg-gray-600/70 rounded-lg mx-auto"></div>
        </div>
      </div>
    </section>
  );
};
