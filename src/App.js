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

  TotalSum(number,method){
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
          <Counter initialCount='2' TotalSum={(number,method)=>this.TotalSum(number,method)}/>
          <Counter initialCount='4' TotalSum={(number,method)=>this.TotalSum(number,method)}/>
          <Counter initialCount='6' TotalSum={(number,method)=>this.TotalSum(number,method)}/>
          <Counter TotalSum={(number,method)=>this.TotalSum(number,method)} />
          <h3>{`Total Amount : ${this.state.total}`}</h3>
        </div>
      </div>
    );
  }
}

export default App;