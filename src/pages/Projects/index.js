import Card from "../../components/Card";

export default function Projects() {
    return (
        <div className="projects-page">
            <h1 className="page-header">Projects</h1>
            <div  className="content-container ">
                <div className="cards-container page-item">
                    <Card className="page-item" title="test title" footer="test footer"/>
                    <Card title="test title" footer="test footer"/>
                    <Card title="test title" footer="test footer"/>
                    <Card title="test title" footer="test footer"/>
                    <Card title="test title" footer="test footer"/>
                    <Card title="test title" footer="test footer"/>
                    <Card title="test title" footer="test footer"/>
                    <Card title="test title" footer="test footer"/>
                    <Card title="test title" footer="test footer"/>
                    <Card title="test title" footer="test footer"/>
                </div>
            </div>
        </div>
    )
}