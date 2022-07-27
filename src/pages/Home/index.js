import InfoPanel from "../../components/InfoPanel/InfoPanel";

export default function Home() {
    return (
        <>
            <div className="hero-title"></div>
            <div className="content-container">
                <InfoPanel />
                <InfoPanel />
            </div>
        </>
    );
}