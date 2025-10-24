function NavButton({title, onClick}){
    return(
        <button className="nav-button" onClick={onClick}>
            {title}
        </button>
    );
}

export default function Nav({onClick, align, onDownload}){
    let alignement = "";

    switch (align){
        case 0: 
            alignement = "Default Align";
            break;
        case 1: 
            alignement = "All Centered";
            break;
        case 2: 
            alignement = "Left Align";
            break;
        case 3: 
            alignement = "Right Align";
            break;
    }


    return(
        <nav className="nav-section">
            <NavButton title={alignement} onClick={onClick}/>
            <NavButton title={"Download"} onClick={onDownload}/>
        </nav>
    );
}