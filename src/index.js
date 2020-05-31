import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const Hello = (props) => {

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://code.atharvakadam.com">Atharva Kadam</a>
    </div>
  )
}

const handleClick = () => {
  console.log("CLICKED");
}

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  );
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );
}


const App = () => {
  const answer = useState(0);
  console.log(answer);
  const [counter, setCounter] = answer
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  return (
  <div>
  <Display counter={counter} />
  <Button text='plus' handleClick={increaseByOne} />
  <Button text='zero' handleClick={setToZero} />
  <Button text='minus' handleClick={decreaseByOne} />
  </div>
  
  );
}


ReactDOM.render( <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
