import InfoPanel from "../../components/InfoPanel/InfoPanel";
import Teammate from "../../components/Teammate/Teammate";

export default function Team() {
    return (
        <>
            <h1 className="page-header-short">Teammates</h1>
            <div className="content-container">
                <InfoPanel component={<Teammate picture={"Picture"} name={"Vincent"} shortDescription={"Short Description"} longDescription={"Long Description"}/>}/>
            </div>
        </>
    )
}