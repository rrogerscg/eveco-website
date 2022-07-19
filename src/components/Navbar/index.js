import "./index.css"
import {Link, useMatch, useResolvedPath} from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
        <Link to="/eveco-website" className="site-title">EvEco</Link>
        <ul>
            <CustomLink to="/eveco-website">EvEco</CustomLink>
            <CustomLink to="/eveco-website/projects">Projects</CustomLink>
            <CustomLink to="/eveco-website/pricing">Pricing</CustomLink>
            <CustomLink to="/eveco-website/about">About</CustomLink>
            <CustomLink to="/eveco-website/contact">Contact</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return(
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}