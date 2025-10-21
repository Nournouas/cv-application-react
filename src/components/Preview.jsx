export default function Preview({personal}){
    let seperator1 = "";
    if (personal.fullName || personal.address || personal.phone || personal.email){
        seperator1 = "preview-seperator"
    }
    return(
        <div className="preview-container">
            <h1 className="preview-fullName">{personal.fullName}</h1>
            <h3 className="preview-email">{personal.email}</h3>
            <h3 className="preview-phone">{personal.phone}</h3>
            <h3 className="preview-address">{personal.address}</h3>
            <div className={seperator1}></div>
        </div>
    );
}