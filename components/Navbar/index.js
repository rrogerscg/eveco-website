import Link from 'next/link';
import {useRouter} from "next/router";

export default function Navbar() {

    const router = useRouter();

    return (
        <nav className="nav bg-color-primary">
            <Link href="/"><a className="site-title">EvEco</a></Link>
            <div className="link-container">
                <ul>
                    <li className={router.pathname === "/" ? "active" : ""}>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li className={router.pathname === "/Services" ? "active" : ""}>
                        <Link href="/Services"><a>Services</a></Link>
                    </li>
                    <li className={router.pathname === "/Projects" ? "active" : ""}>
                        <Link href="/Projects"><a>Projects</a></Link>
                    </li>
                    <li className={router.pathname === "/Team" ? "active" : ""}>
                        <Link href="/Team"><a>Team</a></Link>
                    </li>
                    <li className={router.pathname === "/Pricing" ? "active" : ""}>
                        <Link href="/Pricing"><a>Pricing</a></Link>
                    </li>
                    <li className={router.pathname === "/Contact" ? "active" : ""}>
                        <Link href="/Contact"><a>Contact</a></Link>
                    </li>
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