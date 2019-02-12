import React, { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

export default (props: ButtonProps) => {
  return (
    <button type="button" className="button" onClick={props.onClick}>
      {props.children}
      <style jsx>{`
        .button {
          background-color: lightblue;
          border: 0;
          cursor: pointer;
          padding: 1em;
          border-radius: 5px;
          font-weight: bold;
        }
      `}</style>
    </button>
  );
};
