// CAROLINA ROJAS COLLANTE
import React, { useState } from 'react';

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);

    const handleBirthday = () => {
        setAge(age + 1);
    };

    return (
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            {(props.firstName === 'John' && props.lastName === 'Smith') ||
            (props.firstName === 'Jane' && props.lastName === 'Doe') ? (
                <button onClick={handleBirthday}>Birthday Button for {props.firstName} {props.lastName}</button>
            ) : null}
        </div>
    );
};

export default PersonCard;