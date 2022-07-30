export default function ServiceCard({title, description}) {
    return (
        <div className="card-container">
            <div className="card bg-color-primary">
                <div className="card-item card-footer">
                    <div className="card-footer-item">
                        {title}
                    </div>
                    <div className="card-footer-item">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}