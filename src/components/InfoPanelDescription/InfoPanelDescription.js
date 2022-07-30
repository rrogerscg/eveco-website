
export default function InfoPanelDescription() {

    const description = "EvEco is a geospatial solutions firm, rooted in the goal to empower data-driven " +
        "decision-making for informed consensus approaches to promote lasting benefit in natural resource and " +
        "community planning."

    const allConnected = "It's all connected."

    return (
        <div className="info-panel-container">
            <div className="info-panel-item large-text">
                {description}
            </div>
            <hr />
            <div className="info-panel-item italic medium-text">
                {allConnected}
            </div>
        </div>
    );
}