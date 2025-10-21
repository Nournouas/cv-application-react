import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import Preview from "./Preview";
import { useState } from "react";

export default function Builder(){
    const [personalDetails, setPersonalDetails] = useState({
        fullName: "", 
        email: "", 
        phone: "", 
        address: ""
    });

    
    const [educationunits, setEducationUnits] = useState([{
        id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
        school: "University of Greenwich",
        degree: "Computer Science",
        start: "09/2018",
        end: "07/2021",
        location: "London, UK"
    }])

    const handlePersonalDetail = (propertyName, value) => {
        setPersonalDetails({...personalDetails, [propertyName] : value});
    };

    const handleAddEducation = (newEducationObj) => {
        setEducationUnits([...educationunits, newEducationObj]);
    }

    return(
        <div className="builder">
            <PersonalInfo 
                onChange={handlePersonalDetail} 
                fullname={personalDetails.fullName}
                email={personalDetails.email}
                phone={personalDetails.phone}
                address={personalDetails.address}
                />

            <Education educationUnits={educationunits} />
            <Experience />
            <Preview personal={{...personalDetails}}/>
        </div>
    );
}