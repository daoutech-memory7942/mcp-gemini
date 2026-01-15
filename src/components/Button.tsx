type ButtonProps = {
  type?: "primary" | "normal" | "ghost" | "secondary";
  state?: "hover" | "normal";
  children?: React.ReactNode;
};

export default function Button({ type = "primary", state = "normal", children = "Button" }: ButtonProps) {
  
  const getButtonClasses = (type: ButtonProps["type"], state: ButtonProps["state"]) => {
    const base = "flex h-[32px] items-center px-3 rounded-[--radius-medium] text-[--spacing-body-medium] font-medium leading-normal";

    const typeStyles = {
        primary: "text-[--color-text-neutral-white]",
        secondary: "text-[--color-btn-text-primary] border border-[--color-btn-border-primary]",
        normal: "text-[--color-text-neutral-base] border border-[--color-btn-border-normal]",
        ghost: "text-[--color-text-neutral-base]",
    };

    const stateStyles = {
        primary: {
            normal: "bg-[--color-btn-bg-primary-base]",
            hover: "bg-[--color-btn-bg-primary-hover]",
        },
        secondary: {
            normal: "bg-[--color-btn-bg-normal-base]",
            hover: "bg-[--color-btn-bg-normal-hover]",
        },
        normal: {
            normal: "bg-[--color-btn-bg-normal-base]",
            hover: "bg-[--color-btn-bg-normal-hover]",
        },
        ghost: {
            normal: "bg-transparent",
            hover: "bg-[--color-btn-bg-normal-hover]",
        },
    };
    
    // @ts-ignore
    return `${base} ${typeStyles[type]} ${stateStyles[type][state]}`;
  };


  return (
    <div className={getButtonClasses(type, state)}>
      <p>{children}</p>
    </div>
  );
}