import InfoPanel from "../../components/InfoPanel/InfoPanel";
import InfoPanelDescription from "../../components/InfoPanelDescription/InfoPanelDescription";

export default function About() {
    return (
        <>
            <h1 className="page-header">Content Coming</h1>
            <div className="content-container">
                <InfoPanel component={<InfoPanelDescription />}/>
            </div>
        </>
    )
}