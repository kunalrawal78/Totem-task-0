import React, { useState } from 'react'
import { FaCircle } from "react-icons/fa";

const roles = ["Brainstroming", "Learning", "Coding", "Desiging", "Research","Writting","Generating Images"];

const DropdownUsecase = () => {
 const [selected, setSelected] = useState("Use Case");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative  text-center w-32 text-[12px] dark:text-black  ">
        
      <div
        onClick={() => setOpen(!open)}
        className="bg-white px-3 py-2 rounded-full shadow-[1px_2px_0px_0px_rgba(0,0,0,1)] border border-black cursor-pointer font-semibold flex justify-between items-center"
      >
        {selected}
        <span className="text-cyan-500 ml-2">
          <FaCircle size={10} />
        </span>
      </div>

      {open && (
        <ul className="absolute z-10 mt-2 w-full bg-cyan-100 rounded-xl border border-black py-2 shadow-lg">
          {roles.map((role) => (
            <li
              key={role}
              className={`py-2 px-4 cursor-pointer hover:bg-cyan-200 font-semibold ${
                role === selected ? "bg-cyan-200" : ""
              }`}
              onClick={() => {
                setSelected(role);
                setOpen(false);
              }}
            >
              {role}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownUsecase