import InfoPanel from "../../components/InfoPanel/InfoPanel";
import ServiceCardGallery from "../../components/ServiceCardGallery/ServiceCardGallery";

export default function Services() {
    return (
        <>
            <h1 className="page-header">Content Coming</h1>
            <div className="content-container bg-color-tertiary">
                <InfoPanel component={<ServiceCardGallery />}/>
            </div>
        </>
        )
}