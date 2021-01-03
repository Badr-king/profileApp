import React from 'react'
import PropTypes from "prop-types";
export default function Profile(props) {
  
    
    return (

        <div>
            <h1>{props.fullname}</h1>
            <h1>{props.bio}</h1>
            <h1>{props.profession}</h1> 
             <img src={props.img} alt="profile"/>
             <div><button onClick={()=>props.handlclick(props.fullname)}>click here </button></div>
            


        </div>
    )
  
}

Profile.propTypes={
    fullname: PropTypes.string   }


Profile.defaultProps = {
    fullname: "ahmed",
    bio: "doctor",
    profession :"designer"

   };
