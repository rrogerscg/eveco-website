export default function Card({title, description}) {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-item card-body bg-image-global">
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