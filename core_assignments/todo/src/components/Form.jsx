import React, {useState} from 'react'

const Form = (props) => {
    const [activity, setActivity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewActivity(activity)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setActivity(e.target.value)}/>
            <input type="submit" value="Add Activity"/>
        </form>
    </div>
  )
}

export default Form