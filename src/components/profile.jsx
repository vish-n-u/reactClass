import React, { useEffect, useState,  } from "react";


class Profile extends React.Component{
    
    render(){
        return <div>
        <Profile2 name="Vishnu"/>
        <h1>Profile.... </h1>
        <Profile3/>
        </div>
    }
}

class Profile2 extends React.Component{
    constructor(props){
        super(props)
            this.state={
                count:1,
                img:null 
            }
        console.log("Child constructor")
    } 
    componentDidMount(){
       
    this.setState({
            count:1000
    })
    console.log("Child Component did mount")
     
    }
    componentDidUpdate(){
        console.log("Child updated")
    }
    render(){  
        console.log("Child did render")
        return (
        <div>
        <button onClick={()=>{ let x = this.state.count+1
            this.setState({count:x})}} > click Me! = {this.state.count}</button>
        <h2>this is:{this.props.name}</h2> 
        </div>
    )
}
}

const Profile3 = ()=>{
    let count = 0
    useEffect(()=>{
        console.log("render----")
        
    },[])
    console.log(count,typeof count)
    return (
        <button onClick={()=>{
            count+=1
            console.log(count)
        }}>{count}</button>
    )
}
export default Profile