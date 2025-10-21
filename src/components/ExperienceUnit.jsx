import CustomInput from "./CustomInput";

export default function ExperienceUnit({show}){
    let component = (
            <div className="experience-unit">
                <h3>Fyrtorr</h3>
                <button className="reveal-button">+</button>
            </ div>
    )

    if (show){
        component = (
            <div className="experience-unit unit-open">
                <div className="unit-title-container">
                    <h3>Fyrtorr</h3>
                    <button className="hide-button">-</button>
                </div>
                <form>
                    <CustomInput type={"text"} value={""} label={"Full Name"} id={"full-name"}/>
                    <CustomInput type={"email"} value={""} label={"Email"} id={"email"}/>
                    <CustomInput type={"tel"} value={""} label={"Phone Number"} id={"telephone-number"}/>
                    <CustomInput type={"text"} value={""} label={"Address"} id={"address"}/>
                </form>
                <div className="unit-buttons-div">
                    <button className="unit-button save">Save</button>
                    <button className="unit-button delete">Delete</button>
                    <button className="unit-button cancel">Cancel</button>
                </div>
            </ div>
            
        )
    }

    return (
        component
    );
}