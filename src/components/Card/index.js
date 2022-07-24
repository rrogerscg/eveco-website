export default function Card({title, footer}) {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-item">
                    <p>{title}</p>
                </div>
                <div className="card-item">
                    <p>Card Body</p>
                </div>
                <div className="card-item">
                    <p>{footer}</p>
                </div>
            </div>
        </div>
    );
}