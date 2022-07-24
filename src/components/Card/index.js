export default function Card({title, footer}) {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-item">
                    {title}
                </div>
                <div className="card-item">
                    Card Body
                </div>
                <div className="card-item">
                    {footer}
                </div>
            </div>
        </div>
    );
}