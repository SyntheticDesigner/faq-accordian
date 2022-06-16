import React, { useState } from "react";
import { ReactComponent as Arrow } from "../images/icon-arrow-down.svg";

export default function Question({ open, setOpen, data }) {
  return (
    <li className='question'>
      <div
        className={open === data.id ? "top-line top-isOpen" : "top-line"}
        onClick={() => (open === data.id ? setOpen("") : setOpen(data.id))}
      >
        {data.topLine}
        <Arrow />
      </div>
      <p className={open === data.id ? "bottom-isOpen" : "bottom-line"}>
        {data.bottomLine}
      </p>
    </li>
  );
}
