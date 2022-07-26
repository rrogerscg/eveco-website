export default function Card({title, description}) {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-item card-body">
                    Card Body
                </div>
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