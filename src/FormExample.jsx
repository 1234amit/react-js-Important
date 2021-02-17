import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import './style.css'

class FormExample extends React.Component{
    state = {
        input : "Amit",
        input1 : "Goswami",
     }

     showValue = ()=>{
         console.log("value 1" + this.state.input)
         console.log("value 2" + this.state.input1)
     }

     changeInput = (e)=>{
         if(e.target.name === 'input1'){
             this.setState({input: e.target.value})
         }
         if(e.target.name === 'input2'){
             this.setState({input1: e.target.value})
         }
     }
    render(){

        return(
            <div className="form">
                <h1 className="text">This is a form page </h1>
                <input type="text" name="input1" 
                placeholder="Enter Your First Name" 
                className="first_input" onChange={this.changeInput} /><br/>

                <input type="text" name="input2"
                 placeholder="Enter Your Last Name"
                  className="last_input" onChange={this.changeInput} /><br/>

                <button type="submit" name="submit" onClick={this.showValue} className="button">Register</button><br /><br />
                <div>
                    <span>Value 1: {this.state.input}  </span><br/>
                    <span>Value 2: {this.state.input1}</span>
                </div>
            </div>
            
        )
    }
}

export default FormExample;