import React, {useState} from 'react'
import './App.css';
import Activity from './components/Activity';
import Form from './components/Form';

function App() {
  const [currentActivityList, setCurrentActivityList] = useState([]);

  const deleteItem = (index) => {
    const filterList = currentActivityList.filter((activity,i)=> {
      return i !== index
    })
    setCurrentActivityList(filterList)
  }

  const addActivity = (newActivity) => {
    setCurrentActivityList([...currentActivityList, newActivity])
  }

  return (
    <div className="App">
      <Form onNewActivity={addActivity}/>
      <Activity activities={currentActivityList} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
