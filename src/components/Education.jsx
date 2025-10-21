import EducationUnit from "./EducationUnit";
import { useState } from "react";

export default function Education({educationUnits}){
    const [status, setStatus] = useState("list");

    if (educationUnits[0] && status === "list"){
        return(
            <div className="input-div education-info">
                <h2>Education</h2>
                {
                    educationUnits.map((unit)=>{
                        return(
                            <EducationUnit key={unit.id} show={unit.show} />
                        );
                    })
                }
                <button className="add-unit-button">+Add Education</button>
            </div>
        );
    } else if (status === "list"){
        return(
            <div className="input-div education-info">
                <h2>Education</h2>
                <button className="add-unit-button">+Add Education</button>
            </div>
        );
    }
    
}