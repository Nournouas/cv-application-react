import CustomInput from "./CustomInput";

export default function PersonalInfo(){
    return(
        <div className="input-div personal-info">
            <h2>Personal Details</h2>
            <form>
                <CustomInput type={"text"} value={""} label={"Full Name"} for={"full-name"}/>
                <CustomInput type={"email"} value={""} label={"Email"} for={"email"}/>
                <CustomInput type={"tel"} value={""} label={"Phone Number"} for={"telephone-number"}/>
                <CustomInput type={"text"} value={""} label={"Address"} for={"address"}/>
            </form>
        </div>
    );
}