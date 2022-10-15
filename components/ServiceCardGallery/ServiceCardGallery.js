import ServiceCard from "../ServiceCard/ServiceCard";

// ToDo: load services from mock
export default function ServiceCardGallery(){
    return (
        <div className="info-panel-item">
            <div className="service-cards-container page-item">
                <ServiceCard title="Geospacial Technology"/>
                <ServiceCard title="Communications, Design & Cartography"/>
                <ServiceCard title="Natural Resource & Community Planning"/>
                <ServiceCard title="Environment Permitting & Compliance"/>
                <ServiceCard title="Disaster Relief & Response Support"/>
            </div>
        </div>
    )
}

