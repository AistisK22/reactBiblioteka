interface DividerProps {
    color?: string;
    variant?: "dotted" | "solid" | "dashed";
    rounded?: boolean;
    size?: "small" | "normal" | "large";
}

const Divider = ({ color, variant, rounded, size }: DividerProps) => {
    return (
        <hr
            style={{
                color: color ? color : 'gray',
                borderStyle: variant === 'dotted'
                    ? 'dotted'
                    : variant === 'dashed'
                        ? 'dashed' : 'solid',
                borderRadius: rounded ? '16px' : '0',
                borderWidth: size === 'small' ? '0.5px' : size === 'large' ? '5px' : '1px'
            }}
        />)
}

export default Divider;