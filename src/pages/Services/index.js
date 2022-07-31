import InfoPanel from "../../components/InfoPanel/InfoPanel";
import ServiceCardGallery from "../../components/ServiceCardGallery/ServiceCardGallery";

export default function Services() {
    return (
        <>
            <div className="page-header"></div>
            <div className="content-container bg-color-tertiary">
                <InfoPanel component={<ServiceCardGallery />}/>
            </div>
        </>
        )
}