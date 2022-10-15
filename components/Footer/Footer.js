import {Instagram, Linkedin} from 'react-bootstrap-icons';

export default function Footer() {

    return (
        <div className="footer-panel-container">
            <div className="footer-content">
                <Instagram className="clickable" color="#39887D" size={25}/>
                <Linkedin className="clickable" color="#39887D" size={25}/>
            </div>
            <div>Copyright © 2022 EvEco LLC | All Rights Reserved</div>
        </div>
    );
}