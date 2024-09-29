import React, { useState } from "react";

export default function FloatingInput({id, name, value, handleChange}) {

  return (
    <div className="relative">
        {
            name !== "message" ? (

                <input
                  type="text"
                  id={id}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border border-textColor appearance-none  focus:outline-none focus:ring-0 focus:border-primaryColor peer hover:shadow-[0_0_10px_0px_#64FFDA80]"
                  value={value}
                  placeholder=" "
                  name={name}
                  onChange={(e)=> handleChange(e)}
                />
            )

            :
      (<textarea name={name} id={id} rows={4} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border border-textColor appearance-none  focus:outline-none focus:ring-0 focus:border-primaryColor peer hover:shadow-[0_0_10px_0px_#64FFDA80]" placeholder="" value={value}  onChange={(e) => handleChange(e)}></textarea>)
        }
      <label
        htmlFor={id}
        className={`absolute text-sm text-textColor  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-bgColor px-2 peer-focus:px-2 peer-focus:text-primaryColor  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 ${name !== "message" ? "peer-placeholder-shown:top-1/2 ": "peer-placeholder-shown:top-6"} peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
      >
        {name}
      </label>
    </div>
  );
}
