import React from 'react';

let AppName=(props)=>{
    return(<div><h1>{props.children}</h1><h6>{props.desc}</h6></div>)
}

export default AppName;