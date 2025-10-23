import CustomInput from "./CustomInput";
import { useState } from "react";

//Produces the component for each individual education unit
function EducationUnit({show, onClickExpand, onClickCancel, unit, onClickSave, onClickDelete, onClickChange}){
    //holds an instance of the unit object during hte current session of editing the unit
        const [unitObject , setUnitObject] = useState({
            id: unit.id,
            school: unit.school,
            degree: unit.degree,
            start: unit.start,
            end: unit.end,
            location: unit.location
        });
    //produces the default look for each of the education units
    let component = (
            <div className="education-unit">
                <h3 onClick={() => onClickExpand(unit.id)}>{unit.school + " | " + unit.degree}</h3>
                <button className="reveal-button" onClick={() => onClickExpand(unit.id)}>+</button>
            </ div>
    )

    //if the component is in "show" mode, it will produce the full view.
    if (show != ""){
        //sets the current unit temp object upon changing the fields
        function handleEducationChange(propertyName, value){
            setUnitObject({...unitObject, [propertyName] : value});
            onClickChange({...unitObject, [propertyName] : value});
        };

        component = (
            <div className="education-unit unit-open">
                <div className="unit-title-container">
                    <h3 
                        onClick={() => {
                            onClickCancel()
                            setUnitObject({...unit});
                        }}
                        >{unit.school + " | " + unit.degree}
                    </h3>
                    <button 
                        className="hide-button" 
                        onClick={() => {
                            onClickCancel()
                            setUnitObject({...unit});
                        }}
                        >-
                    </button>
                </div>
                
                <form>
                    <CustomInput 
                        type={"text"} 
                        value={unitObject.school} 
                        label={"School"} 
                        id={"school"} 
                        onChange={(e) => handleEducationChange("school", e.target.value)}
                    />
                    <CustomInput
                        type={"text"} 
                        value={unitObject.degree} 
                        label={"Degree"} 
                        id={"degree"} 
                        onChange={(e) => handleEducationChange("degree", e.target.value)}
                    />
                    <CustomInput 
                        type={"text"} 
                        value={unitObject.start} 
                        label={"Start Date"} 
                        id={"start-date"} 
                        onChange={(e) => handleEducationChange("start", e.target.value)}
                    />
                    <CustomInput 
                        type={"text"} 
                        value={unitObject.end} 
                        label={"End Date"} 
                        id={"end-date"} 
                        onChange={(e) => handleEducationChange("end", e.target.value)}
                    />
                    <CustomInput 
                        type={"text"} 
                        value={unitObject.location} 
                        label={"Location"} 
                        id={"location"} 
                        onChange={(e) => handleEducationChange("location", e.target.value)}
                    />
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
export default function Education({educationUnits, onSave, onDelete, onAdd, onChange}){
    //state that handles which education unit is being shown
    const [showingID, setShowingID] = useState("");

    //handles showing a specific education unit
    const handleShowUnit = (showThisID) => {
        setShowingID(showThisID);
    }

    //handles hiding the current education unit
    const handleHideUnit = () => {
        setShowingID("");
        onChange("hide")
    }

     const handleNewUnit= () =>{
        let uniqueID = self.crypto.randomUUID();

        let newUnit = {
            id: uniqueID,
            school: "",
            degree: "",
            start: "",
            end: "",
            location: ""
        }

        onAdd(newUnit);
        setShowingID(newUnit.id);
     }

    
    //if no education is being shown, dispaly a list of education units, 
    // if there is an education unit selected, display only that education unit.
    if (showingID === "" && educationUnits.length > 0){
        return(
            <div className="input-div education-info">
                <h2>Education</h2>
                {
                    educationUnits.map((unit)=>{
                        return(
                            <EducationUnit 
                                show={showingID} 
                                key={unit.id} 
                                onClickExpand={handleShowUnit} 
                                unit={unit}
                            />
                        );
                    })
                }
                <button className="add-unit-button" onClick={() => handleNewUnit()}>+Add Education</button>
            </div>
        );
    }else if (educationUnits.length > 0) {
        return(
            <div className="input-div education-info">
                <h2>Education</h2>
                {
                    educationUnits.map((unit)=>{
                        if(unit.id === showingID){
                            return <EducationUnit 
                                        show={showingID} 
                                        key={unit.id} 
                                        onClickCancel={handleHideUnit} 
                                        onClickDelete={onDelete} 
                                        onClickSave={onSave}
                                        onClickChange={onChange} 
                                        unit={unit}
                                    />
                        }
                    })
                }
                <button className="add-unit-button" onClick={() => handleNewUnit()}>+Add Education</button>
            </div>
        );
    }
    
    return(
        <div className="input-div education-info">
            <h2>Education</h2>
            <button className="add-unit-button" onClick={() => handleNewUnit()}>+Add Education</button>
        </div>
    )
}