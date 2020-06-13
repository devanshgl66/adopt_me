import React,{useState,useEffect} from "react"
import ReactDOM from "react-dom"
const App=()=>{
    const [location,updateLocation]=useState('India');
    return(
        <div>
            <label htmlFor="location">Location</label>
            
            <input type="text" value={location} id='location' onChange={e=>updateLocation(e.target.value)}/>
        </div>
    )
}
ReactDOM.render(React.createElement(App),document.getElementById('root'));