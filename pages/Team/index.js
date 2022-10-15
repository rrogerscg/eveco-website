import Teammate from "../../components/Teammate/Teammate";

export default function Team() {

    const vinceDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
        "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation " +
        "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in " +
        "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non " +
        "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    const shortDescription = "Lorem ipsum dolor sit amet"
    // ToDo: load teammates from mock
    return (
        <>
            <div className="page-header-container">
                <h1 className="primary-color">ROSTER</h1>
                <h3 className="primary-color">- Meet The Team -</h3>
            </div>
            <div className="content-container">
                <Teammate picture={"Picture"} name={"Vince Rogers"} shortDescription={shortDescription} longDescription={vinceDescription}/>
                <Teammate picture={"Picture"} name={"Vince Rogers"} shortDescription={shortDescription} longDescription={vinceDescription}/>
                <Teammate picture={"Picture"} name={"Vince Rogers"} shortDescription={shortDescription} longDescription={vinceDescription}/>
            </div>
        </>
    )
}