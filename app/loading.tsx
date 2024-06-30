import React from "react";

const loading = () => {
  return (
    <div className="w-[100vw] absolute overflow-hidden bg-white top-0 left-0
     h-screen z-[500] flex justify-center items-center">
      <div className="w-[40px] h-[40px] border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default loading;
