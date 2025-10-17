import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import Preview from "./Preview";

export default function Builder(){
    return(
        <div className="builder">
            <PersonalInfo />
            <Education />
            <Experience />
            <Preview />
        </div>
    );
}