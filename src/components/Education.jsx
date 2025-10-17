import EducationUnit from "./EducationUnit";

export default function Education(){
    return(
        <div className="input-div education-info">
            <h2>Education</h2>
            <EducationUnit show={true}/>
            <EducationUnit show={false}/>
            <button>+Add Education</button>
        </div>
    );
}