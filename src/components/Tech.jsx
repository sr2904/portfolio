import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          className='w-28 h-28 bg-tertiary rounded-2xl p-4 flex flex-col items-center justify-center gap-2'
          key={technology.name}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-12 h-12 object-contain'
          />
          <p className='text-[12px] text-center text-secondary leading-tight'>
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
