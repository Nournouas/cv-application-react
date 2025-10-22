import CustomInput from "./CustomInput";

export default function PersonalInfo({onChange, personalDetails}){

    return(
        <div className="input-div personal-info">
            <h2>Personal Details</h2>
            <form>
                <CustomInput type={"text"} value={personalDetails.fullname} label={"Full Name"} for={"full-name"} onChange={(e) => onChange("fullName", e.target.value)}/>
                <CustomInput type={"email"} value={personalDetails.email} label={"Email"} for={"email"} onChange={(e) => onChange("email", e.target.value)}/>
                <CustomInput type={"tel"} value={personalDetails.phone} label={"Phone Number"} for={"telephone-number"} onChange={(e) => onChange("phone", e.target.value)}/>
                <CustomInput type={"text"} value={personalDetails.address} label={"Address"} for={"address"} onChange={(e) => onChange("address", e.target.value)}/>
            </form>
        </div>
    );
}