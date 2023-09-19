import React from "react";

export default function LoadingTemplate() {
  return (
    <div className="">
      <strong>Loading...</strong>
      <div
        className="ml-auto inline-block h-32 w-32 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
}
