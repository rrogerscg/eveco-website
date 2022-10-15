export default function Card({title, description, image}) {
    const imageStyle = {
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}${image})`,
        backgroundSize: "cover"
    }
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-item card-body bg-image-global" style={imageStyle}>
                    Card Body
                </div>
                <div className="card-item card-footer">
                    <div className="card-footer-item card-title">
                        {title}
                    </div>
                    <div className="card-footer-item card-description">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}