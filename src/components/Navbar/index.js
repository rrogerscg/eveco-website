import {Link, useMatch, useResolvedPath} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav bg-color-primary">
            <Link to="/eveco-website" className="site-title">EvEco</Link>
            <div className="link-container">
                <ul>
                    <CustomLink to="/eveco-website">Home</CustomLink>
                    <CustomLink to="/eveco-website/services">Services</CustomLink>
                    <CustomLink to="/eveco-website/projects">Projects</CustomLink>
                    <CustomLink to="/eveco-website/pricing">Pricing</CustomLink>
                    <CustomLink to="/eveco-website/about">About</CustomLink>
                    <CustomLink to="/eveco-website/contact">Contact</CustomLink>
                </ul>
            </div>

        </nav>
    )
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