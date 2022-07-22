
export default function CustomButton() {

    const handleClick = () => {
        console.debug("clicked!");
    }

    return (<>
            <button className="btn-primary" type="button" onClick={ () => handleClick() }>Button</button>
        </>)
}