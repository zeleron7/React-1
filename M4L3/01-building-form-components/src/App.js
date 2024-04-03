import React, {useState} from 'react';
import {seedGenerator } from './services/seido-helpers';
import Person from './models/person';
import {Form01} from './components/01-form';
import {FormUncontrolled02} from './components/02-form-uncontrolled';
import {FormControlled03} from './components/03-form-controlled';
import {FormHandleChange04} from './components/04-form-handle-change';
import {FormValidation05} from './components/05-form-validation';

import './App.css';

function App() {

    const _seeder = new seedGenerator();
    const person = new Person().seed(_seeder);

    //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
    const onSave = (e) => 
    {
      console.log (`onSave invoked`);
      
      console.log(person);   //original person
      console.log(e.person); //returned by FormUncontrolled02
    }  

    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  

    return (
      <>
       <FormHandleChange04 friend={person} onSave={onSave} onUndo={onUndo}/>
      </>
    );
  }
/*
       <Form01 onSave={onSave} onUndo={onUndo}/>
       <FormUncontrolled02 onSave={onSave} onUndo={onUndo}/>
       <FormControlled03 friend={person} onSave={onSave} onUndo={onUndo}/>
       <FormHandleChange04 friend={person} onSave={onSave} onUndo={onUndo}/>
       <FormValidation05 friend={person} onSave={onSave} onUndo={onUndo}/>
*/
export default App;
