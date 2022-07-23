export default function Card({title, footer}) {
    return (
        <div className="card">
            <p className="card-item">{title}</p>
            <p className="card-item">Card Body</p>
            <p className="card-item">{footer}</p>
        </div>
    );
}