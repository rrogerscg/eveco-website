export default function ServiceCard({title}) {
    return (
        <div className="service-card-container">
            <div className="card">
                <div className="card-item card-footer bg-color-primary round-medium bg-image-global">
                    <div className="service-card-footer-item">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
}