//Class component

import React, { Component } from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';


let Timer =()=> {

    const [count,setCount]=useState(0);

    let formatCount=()=>{
        let count=this.state.count;
        return(count===0?'Zero':count)
    }
    
    let incCount=()=> {
        setCount(count+1)
    }

    let decCount=()=>{
        setCount(prevCount=>prevCount-1)
    }

    let startCountDown=()=>{
        let t = setInterval(()=>{
            decCount();
        },1000);

        if(count===0){
            console.log(count)
            clearInterval(t);
        }
    }

    return (<div>
{/*         <img src={imageUrl} width={200} height={200}/><br></br>{' '} */}
        <h3>{count}</h3>
        <Button variant="primary" size="lg" onClick={decCount}> - </Button>{' '}
        <Button variant="primary" size="lg" onClick={incCount}> + </Button><br></br><br></br>
        <Button variant="primary" size="lg" onClick={startCountDown}> Start </Button>
    </div>);
}

export default Timer;