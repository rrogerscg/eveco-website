export default function Teammate({picture, name, shortDescription, longDescription}) {
    return (
        <>
            <div className="teammate-container">
                <div className="teammate-background">
                </div>
                <div className="container">
                    <div className="teammate-panel-container">
                        <div className="teammate-image">
                        </div>
                        <div className="teammate-description">
                            <div className="teammate-name">{name}</div>
                            <br />
                            <div className="teammate-short-desc">{shortDescription}</div>
                            <br />
                            <div className="teammate-long-desc">{longDescription}</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}