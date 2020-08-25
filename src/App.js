import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter';
import HookcounterThree from './components/HookCounterThree';
import HookCounter4 from './components/HookCounter4';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/Hook Mouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';


function App() {
  return (
    <div className="App">
      <HookCounter></HookCounter>
    <HookcounterThree></HookcounterThree>
    <HookCounter4></HookCounter4>
    <HookCounterOne></HookCounterOne>
  {/* <HookMouse></HookMouse> */}
  <MouseContainer></MouseContainer>
  <IntervalHookCounter></IntervalHookCounter>
  <DataFetching></DataFetching>
        latha
    </div>
  );
}

export default App;
