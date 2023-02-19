import React from 'react'

const Activity = (props) => {

  const handleDelete = (index) => {
    props.deleteItem(index);
  };

  return (
    <div>
        <p>Activities</p>
        <ul>
        {
            props.activities.map( (activity, index) => 
                <ul key={ index }>{ activity } <input type="checkbox"/><button onClick={() => handleDelete(index)}>Delete</button></ul>
            )
        }
        </ul>
    </div>
  )
}

export default Activity