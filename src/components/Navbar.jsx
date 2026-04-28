import '../style.css';

export default function Navbar() {
    return(
        <>
        <nav className='navbar'>
            <h1 style={{fontSize:"24px", fontWeight:"bold", letterSpacing:"-1px"}}>
                ANUJ <span style={{color:"#2563eb"}}> OJHA </span>
            </h1>
            <ul className='nav-links'>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li style={{border:"1px solid #333", padding:"5px 15px", borderRadius:"5px"}}>Resume</li>
            </ul>
        </nav>
        </>
    )
}