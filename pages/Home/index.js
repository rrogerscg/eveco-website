import InfoPanel from "../../components/InfoPanel/InfoPanel";
import InfoPanelDescription from "../../components/InfoPanelDescription/InfoPanelDescription";
import ServiceCardGallery from "../../components/ServiceCardGallery/ServiceCardGallery";

export default function Home() {

    return (
        <>
            <div className="hero-title"></div>
            <div className="content-container bg-color-tertiary">
            </div>
            <div className="content-container">
                <InfoPanel component={<InfoPanelDescription />}/>
            </div>
            <div className="content-container bg-color-tertiary">
                <InfoPanel component={<ServiceCardGallery />}/>
            </div>
        </>
    );
}