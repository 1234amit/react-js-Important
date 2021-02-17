import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class BasicExample extends React.Component{
    state = {
        input: "Default",
        input2: "Default2",
    }

 //   constructor(){
 //       super();
 //       this.showInputValue = this.showInputValue.bind(this)
 //   }

    style_input = {margin:15, padding:15}

    //Run only when declear the bind function
    // showInputValue = function(){
    //     console.log("value 1 " + this.state.input)
    //     console.log("value 2 " + this.state.input2)
    // }
    //end only when declear the bind function

    showInputValue = () =>{
        console.log("Value 1 " + this.state.input)
        console.log("value 2 " + this.state.input2)
    }

    changeInput = (event) =>{
        if(event.target.name === "input1"){
            //when directly setting value then view components of dom variable object did n't updated
           // this.state.input = event.target.value;

           //when use setstate the view component of Dom Variable object get update and chage live
           this.setState({ input: event.target.value})
        }
        if(event.target.name === "input2"){

            //this.state.input2 = event.target.value;
            //when use setstate the view component of dom variable object get update and change live
            this.setState({input2: event.target.value})
        }
    }

    render(){
        return(
            <div>
               Input First Value: <input type="text" name="input1" onChange={this.changeInput} placeholder="Input the 1 value:" 
               className="input-box" style={this.style_input} /><br />

               Input Last Value: <input type="text" name="input2" onChange={this.changeInput} placeholder="Input the 2 value:"
                className="input-box" style={this.style_input} /><br />

               <button style={this.style_input} onClick={this.showInputValue}>SHOW THE VALUE</button><br /><br />
            
               <div>
                   <span style={this.style_input}>value 1:{this.state.input} </span><br/>
                   <span style={this.style_input}>value 2:{this.state.input2} </span><br/>
               </div>
                <h1>Here is the basic exaple of the react js project.</h1>
            </div>
        )
    }
}

export default BasicExample