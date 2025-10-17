import ExperienceUnit from "./ExperienceUnit";


export default function Experience(){
    return(
        <div className="input-div experience-info">
            <h2>Experience</h2>
            <ExperienceUnit show={true}/>
            <ExperienceUnit show={false}/>
            <button>+Add Experience</button>
        </div>
    );
}