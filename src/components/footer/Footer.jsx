import React from "react";
import userInfo from "../../userInfo"

export default function Footer() {
  return (
    <>
      <div className="px-20 py-3 font-mono mt-5 flex flex-col items-center">
            <div className="text-primaryColor">{userInfo.name}</div>
            <div className="text-textColor text-md">Copyright &copy; {new Date().getFullYear()} {userInfo.name} | All Rights Reserved.</div>
      </div>    
    </>
  );
}
