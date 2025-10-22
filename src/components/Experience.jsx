import CustomInput from "./CustomInput";
import { useState } from "react";

//Produces the component for each individual education unit
function ExperienceUnit({show, onClickExpand, onClickCancel, unit, onClickSave, onClickDelete}){
    //holds an instance of the unit object during hte current session of editing the unit
        const [unitObject , setUnitObject] = useState({
            id: unit.id,
            name: unit.name,
            position: unit.position,
            start: unit.start,
            end: unit.end,
            location: unit.location,
            description: unit.description
        });
    //produces the default look for each of the education units
    let component = (
            <div className="experience-unit">
                <h3 onClick={() => onClickExpand(unit.id)}>{unit.position + " | " + unit.name}</h3>
                <button className="reveal-button" onClick={() => onClickExpand(unit.id)}>+</button>
            </ div>
    )

    //if the component is in "show" mode, it will produce the full view.
    if (show != ""){
        //sets the current unit temp object upon changing the fields
        function handleExperienceChange(propertyName, value){
            setUnitObject({...unitObject, [propertyName] : value});
        };

        component = (
            <div className="experience-unit unit-open">
                <div className="unit-title-container">
                    <h3 
                        onClick={() => onClickCancel()}
                        >{unit.position + " | " + unit.name}
                    </h3>
                    <button 
                        className="hide-button" 
                        onClick={() => onClickCancel()}
                        >-
                    </button>
                </div>
                
                <form>
                    <CustomInput
                        type={"text"} 
                        value={unitObject.position} 
                        label={"Position"} 
                        id={"position"} 
                        onChange={(e) => handleExperienceChange("position", e.target.value)}
                    />
                    <CustomInput 
                        type={"text"} 
                        value={unitObject.name} 
                        label={"Company"} 
                        id={"company"} 
                        onChange={(e) => handleExperienceChange("name", e.target.value)}
                    />
                    <CustomInput 
                        type={"text"} 
                        value={unitObject.start} 
                        label={"Start Date"} 
                        id={"start-date"} 
                        onChange={(e) => handleExperienceChange("start", e.target.value)}
                    />
                    <CustomInput 
                        type={"text"} 
                        value={unitObject.end} 
                        label={"End Date"} 
                        id={"end-date"} 
                        onChange={(e) => handleExperienceChange("end", e.target.value)}
                    />
                    <CustomInput 
                        type={"text"} 
                        value={unitObject.location} 
                        label={"Location"} 
                        id={"location"} 
                        onChange={(e) => handleExperienceChange("location", e.target.value)}
                    />
                    <label className="input-label" htmlFor="description">
                        <textarea 
                            className="input"
                            value={unitObject.description}
                            id="description"
                            onChange={(e) => handleExperienceChange("description", e.target.value)}
                        ></textarea>
                    </label>
                    
                </form>
                
                <div className="unit-buttons-div">
                    <button className="unit-button save" onClick={() => {
                        onClickSave(unitObject);
                        onClickCancel();
                        }}>Save
                    </button>

                    <button 
                        className="unit-button cancel" 
                        onClick={() => onClickCancel()}
                        >Cancel
                    </button>

                    <button className="unit-button delete" onClick={() => {
                        onClickDelete(unit.id);
                        onClickCancel();
                        }}>Delete
                    </button>
                </div>
                
            </ div>
            
        )
    }

    return (
        component
    );
}



//The education unit that handles the entire component of education, 
// including calling the sub components for each education unit
export default function Experience({experienceUnits, onSave, onDelete, onAdd}){
    //state that handles which education unit is being shown
    const [showingID, setShowingID] = useState("");

    //handles showing a specific education unit
    const handleShowUnit = (showThisID) => {
        setShowingID(showThisID);
    }

    //handles hiding the current education unit
    const handleHideUnit = () => {
        setShowingID("");
    }

     const handleNewUnit= () =>{
        let uniqueID = self.crypto.randomUUID();

        let newUnit = {
            id: uniqueID,
            name: "",
            position: "",
            start: "",
            end: "",
            location: "",
            description: ""
        }

        onAdd(newUnit);
        setShowingID(newUnit.id);
     }

    
    //if no education is being shown, dispaly a list of education units, 
    // if there is an education unit selected, display only that education unit.
    if (showingID === "" && experienceUnits.length > 0){
        return(
            <div className="input-div experience-info">
                <h2>Experience</h2>
                {
                    experienceUnits.map((unit)=>{
                        return(
                            <ExperienceUnit 
                                show={showingID} 
                                key={unit.id} 
                                onClickExpand={handleShowUnit} 
                                unit={unit}
                            />
                        );
                    })
                }
                <button className="add-unit-button" onClick={() => handleNewUnit()}>+Add Experience</button>
            </div>
        );
    }else if (experienceUnits.length > 0) {
        return(
            <div className="input-div experience-info">
                <h2>Experience</h2>
                {
                    experienceUnits.map((unit)=>{
                        if(unit.id === showingID){
                            return <ExperienceUnit 
                                        show={showingID} 
                                        key={unit.id} 
                                        onClickCancel={handleHideUnit} 
                                        onClickDelete={onDelete} 
                                        onClickSave={onSave} 
                                        unit={unit}
                                    />
                        }
                    })
                }
                <button className="add-unit-button" onClick={() => handleNewUnit()}>+Add Experience</button>
            </div>
        );
    }
    
    return(
        <div className="input-div experience-info">
            <h2>Experience</h2>
            <button className="add-unit-button" onClick={() => handleNewUnit()}>+Add Experience</button>
        </div>
    )
}