interface CardProps {
    title?: string;
    body?: string;
    color?: string;
    textColor?: string;
    shadow?: boolean;
    includeImage?: boolean;
    imageUrl?: string;
    variant?:"square" | "rounded";
}

const Card = ({ title, body, color, textColor, shadow, includeImage, imageUrl, variant }: CardProps) => {
    return (
        <div
            className="card"
            style={{
                color: textColor ? textColor : 'black',
                backgroundColor: color ? color : 'white',
                width: "auto",
                minWidth: "100px",
                maxWidth: "960px",
                height: "auto",
                margin: '1rem 0',
                fontFamily: 'Roboto',
                borderRadius: variant === 'square' ? '0px' : '16px',
                border: 'solid 1px gray',
                boxShadow: shadow ? 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' : 'none'
            }}
        >
            {
                includeImage
                &&
                <img
                    style={{borderRadius: variant === 'square' ? '0px' : '16px 16px 0 0'}}
                    className='card-image'
                    src={imageUrl}
                />
            }
            <div style={{ padding: '1rem' }}>
                <h2 style={{ margin: "0", wordWrap: 'break-word' }}>
                    {title}
                </h2>
                <div style={{ fontSize: "large", marginTop: "1rem", wordWrap:'break-word' }}>
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Card;