import React, {useState} from 'react'

const Tab = () => {

    const [activeTab, setActiveTab] = useState("");

    const tab1 = "tab1"
    const tab2 = "tab2"
    const tab3 = "tab3"

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={ handleSubmit}>
            <input value={tab1} type='submit' onClick={()=>setActiveTab(tab1)}/>
            <input value={tab2} type='submit' onClick={()=>setActiveTab(tab2)}/>
            <input value={tab3} type='submit' onClick={()=>setActiveTab(tab3)}/>
        </form>
        <p>{activeTab}</p>
    </div>
  )

}

export default Tab