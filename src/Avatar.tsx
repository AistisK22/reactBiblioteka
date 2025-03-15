interface AvatarProps {
  variant?: "square" | "rounded";
  shadow?: boolean;
  color?: string;
  includeImage?: boolean;
  imageUrl?: string;
  size?: "small" | "normal" | "large";
  text?: string;
  textColor?: string;
}

const Avatar = ({
  variant,
  shadow = false,
  color = "gray",
  includeImage = false,
  imageUrl,
  size = "normal",
  text,
  textColor = "black",
}: AvatarProps) => {
  return (
    <div
      style={{
        width: size === "small" ? "25px" : size === "large" ? "75px" : "50px",
        height: size === "small" ? "25px" : size === "large" ? "75px" : "50px",
        borderRadius: variant === "square" ? "0px" : "50px",
        backgroundColor: color,
        color: textColor,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize:
          size === "small"
            ? "small"
            : size === "large"
            ? "xx-large"
            : "x-large",
        overflow: "hidden",
        boxShadow: shadow
          ? "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          : "none",
      }}
    >
      {includeImage ? (
        <img
          style={{
            width:
              size === "small" ? "25px" : size === "large" ? "75px" : "50px",
            height:
              size === "small" ? "25px" : size === "large" ? "75px" : "50px",
            objectFit: "cover",
            borderRadius: variant === "square" ? "0px" : "50px",
          }}
          src={imageUrl}
        />
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default Avatar;
