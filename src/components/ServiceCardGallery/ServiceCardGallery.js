import ServiceCard from "../ServiceCard/ServiceCard";

export default function ServiceCardGallery(){
    return (
        <div className="info-panel-item">
            <div className="cards-container page-item">
                <ServiceCard className="page-item" title="Geospacial Technology" description="description"/>
                <ServiceCard title="Communications, Design & Cartography" description="description"/>
                <ServiceCard title="Natural Resource & Community Planning" description="description"/>
                <ServiceCard title="Environment Permitting & Compliance" description="description"/>
                <ServiceCard title="Disaster Relief & Response Support" description="description"/>
                <ServiceCard title="Newsletter" description="description"/>
                <ServiceCard title="IG LinkedIn" description="description"/>
            </div>
        </div>
    )
}

