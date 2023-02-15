import React from 'react';

const Form = (props) => {
    const [color, setColor] = props

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return(
            <form onSubmit={ handleSubmit }>
                <h1>Color: </h1>
                <div>
                    <input type="text"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}/>
                </div>
                <div style={{
                    display: "inline-block",
                    height: "50px",
                    width: "50px",
                    backgroundColor: {color}
                }}></div>
                <div>
                    <input type="submit" value="Create Color"/>
                </div>
            </form>
    )
}

export default Form