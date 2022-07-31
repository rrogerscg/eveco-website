import InfoPanel from "../../components/InfoPanel/InfoPanel";
import InfoPanelDescription from "../../components/InfoPanelDescription/InfoPanelDescription";

export default function About() {
    return (
        <>
            <div className="page-header"></div>
            <div className="content-container">
                <InfoPanel component={<InfoPanelDescription />}/>
            </div>
        </>
    )
}