import React, {useState} from 'react'
import './App.css';
import Activity from './components/Activity';
import Form from './components/Form';

function App() {
  const [currentActivityList, setCurrentActivityList] = useState([]);

  const deleteItem = (index) => {
    const newList = [...currentActivityList];
    newList.splice(index, 1);
    setCurrentActivityList(newList);
  }

  const addActivity = (newActivity) => {
    setCurrentActivityList([...currentActivityList, newActivity])
  }

  return (
    <div className="App">
      <Form onNewActivity={addActivity} deleteItem={deleteItem}/>
      <Activity activities={currentActivityList}/>
    </div>
  );
}

export default App;
