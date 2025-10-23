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
    const [educationunits, setEducationUnits] = useState([])

    const [experienceUnits, setExperienceUnits] = useState([])

    const [educationPreview, setEducationPreview] = useState(null);
    const [experiencePreview, setExperiencePreview] = useState(null);

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

    const handleLiveEducationUpdate = (currEducationUnit) => {
        if (currEducationUnit === "hide"){
            setEducationPreview("")
        }else{
            setEducationPreview({...currEducationUnit})
        }
        
    }

    const handleLiveExperienceUpdate = (currExperienceUnit) => {
        if (currExperienceUnit === "hide"){
            setExperiencePreview("")
        }else{
            setExperiencePreview({...currExperienceUnit})
        }
        
    }


    let previewEducationUnits = [];
    let previewExperienceUnits = [];

    if (educationPreview === null){
        previewEducationUnits = educationunits;
    } else {

        previewEducationUnits = educationunits.map((unit) => unit.id === educationPreview.id ? educationPreview : unit)
    }

    if (experiencePreview === null){
        previewExperienceUnits = experienceUnits;
    } else {

        previewExperienceUnits = experienceUnits.map((unit) => unit.id === experiencePreview.id ? experiencePreview : unit)
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
                personal={{...personalDetails}}
                education={previewEducationUnits}
                experience={previewExperienceUnits}
            />
        </div>
    );
}