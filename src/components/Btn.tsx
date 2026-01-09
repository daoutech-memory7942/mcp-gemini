import React from 'react';

type BtnProps = {
  type?: "primary" | "normal" | "ghost" | "secondary";
  state?: "hover" | "normal";
  children: React.ReactNode;
};

const Btn: React.FC<BtnProps> = ({ type = "primary", state = "normal", children }) => {
  const baseClasses = "content-stretch flex h-[var(--height\/5,32px)] items-center overflow-clip px-[var(--padding\/5,12px)] py-0 relative rounded-[var(--radius\/medium,6px)]";

  const typeClasses = {
    primary: {
      normal: "bg-[var(--btn\/bg\/primary\/base,#08a7bf)] text-[color:var(--text\/neutral\/white,white)]",
      hover: "bg-[var(--btn\/bg\/primary\/hover,#0590a5)] text-[color:var(--text\/neutral\/white,white)]",
    },
    secondary: {
      normal: "bg-[var(--btn\/bg\/normal\/base,white)] border border-[var(--btn\/border\/primary,#08a7bf)] border-solid text-[color:var(--btn\/text\/primary,#08a7bf)]",
      hover: "bg-[var(--btn\/bg\/normal\/surface-hover,#e7edf4)] border border-[var(--btn\/border\/primary,#08a7bf)] border-solid text-[color:var(--btn\/text\/primary,#08a7bf)]",
    },
    normal: {
      normal: "bg-[var(--btn\/bg\/normal\/base,white)] border border-[var(--btn\/border\/normal,#a7b9cc)] border-solid text-[color:var(--text\/neutral\/base,#2f353c)]",
      hover: "bg-[var(--btn\/bg\/normal\/hover,#e7edf4)] border border-[var(--btn\/border\/normal,#a7b9cc)] border-solid text-[color:var(--text\/neutral\/base,#2f353c)]",
    },
    ghost: {
        normal: "bg-[var(--btn\/bg\/normal\/base,white)] text-[color:var(--text\/neutral\/base,#2f353c)]",
        hover: "bg-[var(--btn\/bg\/normal\/hover,#e7edf4)] text-[color:var(--text\/neutral\/base,#2f353c)]",
    }
  };

  const textClasses = "font-[\"Pretendard:Medium\",sans-serif] leading-[1.6] not-italic relative shrink-0 text-[length:var(--font-size\/body\/medium,14px)]"

  const combinedClasses = `${baseClasses} ${typeClasses[type][state]}`;

  return (
    <div className={combinedClasses}>
      <p className={textClasses}>
        {children}
      </p>
    </div>
  );
};

export default Btn;
