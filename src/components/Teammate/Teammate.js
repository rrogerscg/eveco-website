export default function Teammate({picture, name, shortDescription, longDescription}) {
    return (
        <div className="card-container">
            <div>{picture}</div>
            <div>{name}</div>
            <div>{shortDescription}</div>
            <div>{longDescription}</div>
        </div>
    );
}