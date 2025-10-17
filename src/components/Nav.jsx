function NavButton({title}){
    return(
        <button className="nav-button">
            {title}
        </button>
    );
}

export default function Nav(){

    return(
        <nav className="nav-section">
            <NavButton title={"Content"}/>
            <NavButton title={"Customise"}/>
            <NavButton title={"Download"}/>
        </nav>
    );
}