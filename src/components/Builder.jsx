import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import Preview from "./Preview";
import { useState } from "react";

export default function Builder(){
    //Personal details state object > remembers the state of the personal details
    const [personalDetails, setPersonalDetails] = useState({
        fullName: "", 
        email: "", 
        phone: "", 
        address: ""
    });

    //Education Units state Object > Remembers the state of the education units
    const [educationunits, setEducationUnits] = useState([{
        id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
        school: "University of Greenwich",
        degree: "Computer Science",
        start: "09/2018",
        end: "07/2021",
        location: "London, UK"
    }, {
        id: "36b8f84d-df4e-4d49-b662-bcewewewe",
        school: "University of Birmingham",
        degree: "Clownery",
        start: "09/2018",
        end: "07/2021",
        location: "London, UK"
    }])

    const [experienceUnits, setExperienceUnits] = useState([{
        id: "36b8f84d-df4e-4d49-b662-bcde7fyrtorr",
        name: "Fyrtorr",
        position: "UX UI Designer",
        start: "04/2022",
        end: "Present",
        location: "London, UK",
        description: "I am a ux designer"
    }])

    //handles the personal detail updating and re-renders the component upon change 
    // (gets called when the text gets edited)
    const handlePersonalDetail = (propertyName, value) => {
        setPersonalDetails({...personalDetails, [propertyName] : value});
    };

    //handles adding an education component and re-renders upon calling saved
    // the map creates a new array, looping through the array and for each unit checks 
    // if the id is the same as the id it receives.
    const handleSaveEducation = (newEducationObj) => {
        const newEducationUnits = educationunits.map((unit) => unit.id === newEducationObj.id ? newEducationObj : unit);
        setEducationUnits(newEducationUnits);
    }

    const handleAddEducation = (newEducationObj) => {
        setEducationUnits([...educationunits, newEducationObj]);
    }

    const handleDeleteEducation = (deletedID) => {
        const newEducationUnits = educationunits.filter((unit) => unit.id != deletedID);
        setEducationUnits(newEducationUnits);
    }


    const handleSaveExperience = (newExperienceObj) => {
        const newExperienceUnits = experienceUnits.map((unit) => unit.id === newExperienceObj.id ? newExperienceObj : unit);
        setExperienceUnits(newExperienceUnits);
    }

    const handleAddExperience = (newExperienceObj) => {
        setExperienceUnits([...experienceUnits, newExperienceObj]);
    }

    const handleDeleteExperience = (deletedID) => {
        const newExperienceUnits = experienceUnits.filter((unit) => unit.id != deletedID);
        setExperienceUnits(newExperienceUnits);
    }




    //Personal Info component receives the data from the personal details state and updates 
    //it using props on re-render.
    //The education component receives the data from the educationunits state and updates it using props
    return(
        <div className="builder">
            <PersonalInfo 
                onChange={handlePersonalDetail} 
                personalDetails={personalDetails}
            />

            <Education 
                onSave={handleSaveEducation}
                onAdd={handleAddEducation}
                onDelete={handleDeleteEducation}
                educationUnits={educationunits} 
            />

            <Experience 
                onSave={handleSaveExperience}
                onAdd={handleAddExperience}
                onDelete={handleDeleteExperience}
                experienceUnits={experienceUnits} 
            />
            <Preview personal={{...personalDetails}}/>
        </div>
    );
}