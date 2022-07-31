import Card from "../../components/Card";

export default function Projects() {

    function getCardList(){
        const cardList = [];
        for(let i = 0; i < 10; i++){
            cardList.push(<Card title={`Project Title ${i + 1}`} description={`Description ${i + 1}`}/>);
        }
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