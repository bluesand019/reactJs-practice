function Biodata (props) {
    return (
        <>
        <h1>Biodata of {props.name} </h1>
        <p><b>Email: </b>{props.email}</p>
        <p><b>Phone: </b>{props.phone}</p>
        <p><b>Github: </b>{props.github}</p>

        <div className="skills">
            <h1>My Skills:</h1>
        <ul>
            {props.skills.map(element => (
                <li key={element}>{element}</li>
            ))}
        </ul>
        </div>
        <div className="interests">
            <h1>My interests</h1>
        <ul>
            {props.interests.map(element => (
                <li key={element}>{element}</li>
            ))}
        </ul>
        </div>
        
        </>
    )
}

export default Biodata;