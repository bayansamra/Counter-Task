import React, { Component } from 'react'
import Counter from './Components/Counter';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state ={
      total: 0,
    }
  }

  changeTotal(number,method){
    if(method === 'increase'){
      this.setState(prevState => ({total: prevState.total + number}))
    }
    
    if(method === 'decrease'){
      this.setState(prevState => ({total: prevState.total - number}))
    }
  }


  render(){
    return (
      <div className="App">
        <div className='container'>
          <Counter initialCount='2' changeTotal={(number,method)=>this.changeTotal(number,method)}/>
          <Counter initialCount='4' changeTotal={(number,method)=>this.changeTotal(number,method)}/>
          <Counter initialCount='6' changeTotal={(number,method)=>this.changeTotal(number,method)}/>
          <Counter changeTotal={(number,method)=>this.changeTotal(number,method)} />
          <h2>{`Total Amount ${this.state.total}`}</h2>
        </div>
      </div>
    );
  }
}

export default App;