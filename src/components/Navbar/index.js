import "./index.css"

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">EVECO</a>
        <ul>
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/projects">Projects</CustomLink>
            <CustomLink href="/pricing">Pricing</CustomLink>
            <CustomLink href="/about">About</CustomLink>
            <CustomLink href="/contact">Contact</CustomLink>
        </ul>
    </nav>
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname;
    
    return(
        <li className={path === href ? "active": ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}