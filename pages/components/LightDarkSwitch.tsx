import Image from "next/image";
import React from "react";

export const LightDarkSwitch = ({
  callback,
  activeType,
}: {
  callback: Function;
  activeType: string;
}) => {
  if (activeType === "dark") {
    return (
      <span
        className="material-icons cursor-pointer"
        onClick={() => callback()}
      >
        light_mode
      </span>
    );
  }
  return (
    <span className="material-icons cursor-pointer" onClick={() => callback()}>
      dark_mode
    </span>
  );
};
