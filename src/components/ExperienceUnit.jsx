import CustomInput from "./CustomInput";

export default function ExperienceUnit({show}){
    let component = (
            <div className="education-unit">
                <h3>Fyrtorr</h3>
                <button className="reveal-button">+</button>
            </ div>
    )

    if (show){
        component = (
            <div className="education-unit">
                <h3>Fyrtorr</h3>
                <form>
                    <CustomInput type={"text"} value={""} label={"Full Name"} for={"full-name"}/>
                    <CustomInput type={"email"} value={""} label={"Email"} for={"email"}/>
                    <CustomInput type={"tel"} value={""} label={"Phone Number"} for={"telephone-number"}/>
                    <CustomInput type={"text"} value={""} label={"Address"} for={"address"}/>
                </form>
                <button>Save</button>
                <button>Cancel</button>
                <button>Delete</button>
            </ div>
            
        )
    }

    return (
        component
    );
}