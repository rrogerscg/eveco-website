import Card from "../../components/Card";

export default function Projects() {
    return (
        <>
            <h1 className="page-item project-header">Projects</h1>
            <div className="cards-container page-item">
                <Card className="page-item" title="test title" footer="test footer"/>
                <Card title="test title" footer="test footer"/>
                <Card title="test title" footer="test footer"/>
                <Card title="test title" footer="test footer"/>
                <Card title="test title" footer="test footer"/>
                <Card title="test title" footer="test footer"/>
            </div>
        </>
    )
}