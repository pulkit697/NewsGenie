import React from "react";

export const LoadingIcon = () => {
  return (
    <div
      className="p-2 d-flex justify-content-center"
      style={{ minHeight: "30vh" }}
    >
      <span
        className="spinner-border spinner-border-sm mx-2"
        role="status"
        aria-hidden="true"
      ></span>
      Loading...
    </div>
  );
};
