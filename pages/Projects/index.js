import Card from "../../components/Card";
import {fetchQuery} from "../../utils/utils";

export default function Projects({projects}) {
    console.log("Projects SSG");
    console.log(projects);
    function getCardList(){
        const cardList = [];
        projects.forEach((item, i) => {
            cardList.push(<Card key={i} title={item.attributes.name} description={item.attributes.description} image={item.attributes.img.data.attributes.formats.large.url}/>);
        })
        return cardList;
    }

    return (
        <>
            <h1 className="page-header">Content Coming</h1>
            <div  className="content-container">
                <div className="cards-container page-item">
                    {getCardList()}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const projects = await fetchQuery('projects');
    console.log("Projects SSR")
    console.log(projects)
    return {
        props: {
            projects
        }
    }
}