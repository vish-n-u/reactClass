const React = require("react") 
import { Link , Outlet } from "react-router-dom"
import Profile from "./profile"


const About2 = ()=>{
    return (<><h1>About us 🧐</h1>
    <Link to="/">
            <h2 key={"hOE3.25"} >
              Home
            </h2>
          </Link>
          <Outlet />
          </>)
}


class About extends React.Component{
  constructor(props){
  super(props)
  this.state={
    count:0
  }
  console.log("Parent Constructor")
  }
  componentDidMount(){
    this.setState({
      count:1000
    })
    console.log("Parent did Mount")
  
  }
  componentDidUpdate(){
    console.log("Parent did update")
  }
  componentWillUnmount(){
    console.log("We have left the old page")
  }
  render(){
    console.log("Parent did render")
    return (<><h1>About us 🧐</h1>
    
    <button onClick={()=>{
      let x = this.state.count+1
      this.setState({
        count :x
      })
    }}>{this.state.count}</button>
    <Link to="/">
            <h2 key={"hOE3.25"} >
              Home
            </h2>
          </Link>
          <Outlet />
          </>)
  }

}
export default About