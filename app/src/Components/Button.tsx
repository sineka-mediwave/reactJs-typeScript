import React from "react";

interface buttonProps {
  name: string;
  type: any;
  onClick?: () => void;
}

function Button({ name, type, onClick }: buttonProps) {
  return (
    <div>
      <button onClick={onClick} type={type}>
        {name}
      </button>
    </div>
  );
}

export default Button;
