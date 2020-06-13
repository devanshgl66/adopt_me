import React,{ useState} from "react"
import ReactDOM from "react-dom"
// //Following will not work as whenever DOM will try to change it will re render the page
// //and it is so fast that no change will appear
// //To change this import { useState} from rect and use it
// const Form =()=>{
//     var location="India";
//     return(
//         <div className="seach-param">
//             <form>
//                 <label htmlFor='location'>Location</label>
//                 <input id='location' value={location}/>
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }

//useState returns a array of 2 items first is value second is the function to change the value
const Form=()=>{
    var [location,updateLocation]=useState('India');
    function f(){
        alert(location);
    }
    return (
        <div className='search-param'>
            <form action='as.html' onSubmit={f}>
                <label htmlFor='location'>Location</label>
                <input type='text' value={location} onChange={e=>updateLocation(e.target.value)}/>
                <input type='submit' ></input>
            </form>
        </div>
    )
}
// console.log(Form.toString());
const App=()=>{
    return(<Form />)
}
ReactDOM.render(React.createElement(App),document.getElementById('root'));