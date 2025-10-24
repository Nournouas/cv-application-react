import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import Preview from "./Preview";
import { useState } from "react";

export default function Builder({align}){
    //Personal details state object > remembers the state of the personal details
    const [personalDetails, setPersonalDetails] = useState({
        fullName: "", 
        email: "", 
        phone: "", 
        address: ""
    });

    //States that keep track of the saved education & experience units
    const [educationunits, setEducationUnits] = useState([]);
    const [experienceUnits, setExperienceUnits] = useState([]);

    //States that can hold a temporary version of a single education or experience unit.
    //The temporary state is useful when displaying live edits that may not be saved
    const [educationPreview, setEducationPreview] = useState(null);
    const [experiencePreview, setExperiencePreview] = useState(null);

    //handles the personal detail updating and re-renders the component upon change 
    // (gets called when the text gets edited)
    const handlePersonalDetail = (propertyName, value) => {
        setPersonalDetails({...personalDetails, [propertyName] : value});
    };

    //handles saving an education component to the state and re-renders upon calling saved
    const handleSaveEducation = (newEducationObj) => {
        const newEducationUnits = educationunits.map((unit) => unit.id === newEducationObj.id ? newEducationObj : unit);
        setEducationUnits(newEducationUnits);
    }

    //handles adding a new education unit to the education list state
    const handleAddEducation = (newEducationObj) => setEducationUnits([...educationunits, newEducationObj]);
    

    //handles deleting an education unit from the list state
    const handleDeleteEducation = (deletedID) => {
        const newEducationUnits = educationunits.filter((unit) => unit.id != deletedID);
        setEducationUnits(newEducationUnits);
    }

    //handles saving an experience component to the state and re-renders upon calling saved
    const handleSaveExperience = (newExperienceObj) => {
        const newExperienceUnits = experienceUnits.map((unit) => unit.id === newExperienceObj.id ? newExperienceObj : unit);
        setExperienceUnits(newExperienceUnits);
    }

    //handles adding a new experience unit to the education list state
    const handleAddExperience = (newExperienceObj) => setExperienceUnits([...experienceUnits, newExperienceObj]);
    

    //handles deleting an experience unit from the list state
    const handleDeleteExperience = (deletedID) => { 
        const newExperienceUnits = experienceUnits.filter((unit) => unit.id != deletedID);
        setExperienceUnits(newExperienceUnits);
    }

    //If set to hide, clears out the educationpreview state. Otherwise, sets it to the parsed unit
    const handleLiveEducationUpdate = (currEducationUnit) => {
        currEducationUnit === "hide" ? setEducationPreview("") : setEducationPreview({...currEducationUnit});
        
    }

    //If set to hide, clears out the educationpreview state. Otherwise, sets it to the parsed unit
    const handleLiveExperienceUpdate = (currExperienceUnit) => {
        currExperienceUnit === "hide" ? setExperiencePreview("") : setExperiencePreview({...currExperienceUnit});
    }

    //These get parsed to the preview components
    let previewEducationUnits = [];
    let previewExperienceUnits = [];

    //Depending on the educationPreview state (either null or an object) update the value of the parameters that get parsed to the preview component.
    educationPreview === null ? previewEducationUnits = educationunits : previewEducationUnits = educationunits.map((unit) => unit.id === educationPreview.id ? educationPreview : unit)
    experiencePreview === null ? previewExperienceUnits = experienceUnits : previewExperienceUnits = experienceUnits.map((unit) => unit.id === experiencePreview.id ? experiencePreview : unit)

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
                onChange={handleLiveEducationUpdate}
                educationUnits={educationunits} 
            />

            <Experience 
                onSave={handleSaveExperience}
                onAdd={handleAddExperience}
                onDelete={handleDeleteExperience}
                onChange={handleLiveExperienceUpdate}
                experienceUnits={experienceUnits} 
            />
            <Preview 
                align={align}
                personal={{...personalDetails}}
                education={previewEducationUnits}
                experience={previewExperienceUnits}
            />
        </div>
    );
}
