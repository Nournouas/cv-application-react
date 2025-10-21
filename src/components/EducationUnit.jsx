import CustomInput from "./CustomInput";

export default function EducationUnit({show}){
    let component = (
            <div className="education-unit">
                <h3>University Of Greenwich</h3>
                <button className="reveal-button">+</button>
            </ div>
    )

    if (show){
        component = (
            <div className="education-unit unit-open">
                <div className="unit-title-container">
                    <h3>University Of Greenwich</h3>
                    <button className="hide-button">-</button>
                </div>
                
                <form>
                    <CustomInput type={"text"} value={""} label={"School"} for={"school"}/>
                    <CustomInput type={"text"} value={""} label={"Degree"} for={"degree"}/>
                    <CustomInput type={"text"} value={""} label={"Start Date"} for={"start-date"}/>
                    <CustomInput type={"text"} value={""} label={"End Date"} for={"end-date"}/>
                    <CustomInput type={"text"} value={""} label={"Location"} for={"location"}/>
                </form>
                <div className="unit-buttons-div">
                    <button className="unit-button save">Save</button>
                    <button className="unit-button cancel">Cancel</button>
                    <button className="unit-button delete">Delete</button>
                </div>
                
            </ div>
            
        )
    }

    return (
        component
    );
}