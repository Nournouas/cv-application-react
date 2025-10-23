function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

export default function Preview({personal, education, experience}){
    try {
        const preview = document.querySelector(".preview-container");
        if (isOverflown(preview)){
        alert("Document too long, Delete last text");
    }
    } catch{
        console.log("initialising preview-container")
    }
    
    let seperatorPersonal = "";
    let seperatorEdu = "";
    let seperatorExp = "";

    if (personal.fullName || personal.address || personal.phone || personal.email){
        seperatorPersonal = "preview-seperator"
    }

    if (education.length > 1){
        seperatorEdu = "preview-seperator-thin"
    }

    if (education.length > 1){
        seperatorExp = "preview-seperator-thin"
    }

    return(
        <div className="preview-container">
            <div className="preview-details">
                <h1 className="preview-fullName">{personal.fullName}</h1>
                <h3 className="preview-email">{personal.email}</h3>
                <h3 className="preview-phone">{personal.phone}</h3>
                <h3 className="preview-address">{personal.address}</h3>
                <div className={seperatorPersonal}></div>
            </div>
            
            <h2 className="preview-education-title">Education</h2>
            {education.length > 0 ? (
                <>
                    {education.map((unit, index) => {
                        let sepLine = index === education.length - 1 ? null :  <div className={seperatorEdu}></div>;
                        let dateSep = unit.start === "" ? null : "-";
                        return(
                            <div className="education-unit-preview">
                                <h3 className="preview-edu-degree">{unit.degree}</h3>
                                <h3 className="preview-edu-school">{unit.school}</h3>
                                <div className="preview-edu-botContainer">
                                    <h4 className="preview-edu-dates">{unit.start} {dateSep} {unit.end}</h4>
                                    <h5 className="preview-edu-location">{unit.location}</h5>
                                </div>
                                {sepLine}
                            </div>
                        )
                    })}
                    <div className={seperatorPersonal}></div>
                </>
            ) : null}

            <h2 className="preview-education-title">Experience</h2>
            {experience.length > 0 ? (
                <>
                    {experience.map((unit, index) => {
                        let sepLine = index === experience.length - 1 ? null :  <div className={seperatorExp}></div>;
                        let dateSep = unit.start === "" ? null : "-";
                        return(
                            <div className="education-unit-preview">
                                <h3 className="preview-edu-degree">{unit.position}</h3>
                                <h3 className="preview-edu-school">{unit.name}</h3>
                                <p className="preview-exp-description">{unit.description}</p>
                                <div className="preview-edu-botContainer">
                                    <h4 className="preview-edu-dates">{unit.start} {dateSep} {unit.end}</h4>
                                    <h5 className="preview-edu-location">{unit.location}</h5>
                                </div>
                                {sepLine}
                            </div>
                        )
                    })}
                    
                </>
            ) : null}

        </div>
    );
}