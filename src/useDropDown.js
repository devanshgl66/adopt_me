import React,{useState} from "react"
// //working for anime only using useState 
// var ANIME=["One Piece","Bleach","Naruto","One Punch Man"];
// const DropDown=()=>{
//     const [anime,updateAnime]=useState("");
//     return(
//         <select id="anime" value={anime} 
//         onChange={e=>updateAnime(e.target.value)}
//         onblur={e=>updateAnime(e.target.value)}
//         >
//             <option />
//         {
//             ANIME.map(ani=>(
//                 <option key={ani} value={ani}>{ani}</option>
//             ))
//         }
//         </select>
        
//     )
// }
// const App=()=>{
//     return(<DropDown />)
// }
// ReactDOM.render(React.createElement(App),document.getElementById('root'));


//general drop down list
const useDropDown=(label,defaultState,options)=>{
    const [state,updateState]=useState(defaultState);
    // const state=defaultState;/
    const id=`use-dropdown-${label.replace(" ",'').toLowerCase()}`;
    // console.log(options);
    const DropDown=()=>(
        <label htmlFor={id}>
            {label}
            <select 
            id={id}
            value={state}
            onChange={e=>updateState(e.target.value)}
            >
                <option >All</option>
                {
                    options.map(op=>(
                        <option value={op} key={op}>{op}</option>
                    ))
                }
            </select>
        </label>
    );
    return [state,DropDown];
}
export default useDropDown;