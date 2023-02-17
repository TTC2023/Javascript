import React, { useState } from 'react';

const Form = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(color);
    }
    
    return(
            <form onSubmit={ handleSubmit }>
                <h1>Color: </h1>
                <div>
                    <label>Color: </label>
                    <input type="text" name="color" onChange={(e) => setColor(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Add"/>
                </div>
            </form>
    )
}

export default Form