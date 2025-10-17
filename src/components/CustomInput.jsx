export default function CustomInput({type, value, label, id}){
    return(
        <label className="input-label" for={id}>
            {label}
            <input className="input" type={type} value={value} id={id}/>
        </label>
    );
}