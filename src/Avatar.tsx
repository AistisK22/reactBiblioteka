interface AvatarProps {
    variant?: "square" | "rounded";
    shadow?: boolean;
    color?:string;
}

const Avatar = ({variant, shadow, color}:AvatarProps) => {
    return(<div style={{
        width:'25px', 
        height:'25px', 
        borderRadius:'50px',
        backgroundColor: color ? color : 'gray',
        padding:'1rem',
        textAlign:'center'
        }}>
aaa
    </div>)
}

export default Avatar;