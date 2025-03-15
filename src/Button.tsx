export interface ButtonProps {
  label?: string;
  textColor?: string;
  color?: string;
  variant?: "square" | "rounded";
  size?: "small" | "normal" | "large";
  shadow?: boolean;
  onClick?: () => void;
}

const Button = ({
  label,
  textColor = "white",
  color = "black",
  variant,
  size,
  onClick,
  shadow,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        color: textColor,
        backgroundColor: color,
        textTransform: "uppercase",
        fontWeight: "bold",
        letterSpacing: "0.1rem",
        fontSize:
          size === "small" ? "small" : size === "large" ? "x-large" : "medium",
        borderRadius: variant === "square" ? "0px" : "16px",
        fontFamily: "Roboto",
        padding: "0.5rem 1rem",
        border: "none",
        boxShadow: shadow
          ? "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          : "none",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
