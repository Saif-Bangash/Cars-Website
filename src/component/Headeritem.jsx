import React from "react";

const Headeritem = ({ name,  }) => {
  return (
    <li className="text-lg cursor-pointer flex items-center space-x-2 group">
      {/* Icon will rotate on hover */}
       
      {/* Text with a custom underline */}
      <span className="relative group-hover:text-green-500 font-poppins font-semibold">
  {name}
  {/* Custom underline */}
  <span className="absolute bottom-[-2px] left-0 w-0 h-[3px] bg-green-500 group-hover:w-full transition-all duration-500"></span>
</span>

    </li>
  );
};

export default Headeritem;
