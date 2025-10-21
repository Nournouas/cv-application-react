export default function CustomInput({type, value, label, id, onChange}){
    return(
        <label className="input-label" htmlFor={id}>
            {label}
            <input className="input" type={type} value={value} id={id} onChange={onChange}/>
        </label>
    );
}