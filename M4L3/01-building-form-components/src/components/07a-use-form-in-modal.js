import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {seedGenerator } from '../services/seido-helpers';
import Person from '../models/person';
import {FormValidation05} from './05-form-validation';

export function UseFormInModal07a() {

    const _seeder = new seedGenerator();
    const p = new Person().seed(_seeder);

    const [show, setShow] = useState(false);
    const [person, setPerson] = useState(p);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
    const onSave = (e) => 
    {
      setShow(false)
      console.log (`onSave invoked`);
    }  

    return (
      <>
      <ul>
        <li>Name: {person.firstName} {person.lastName} </li>
        <li>Birthdate: {person.birthDate} </li>
        <li>Email: {person.email} </li>
        <li>Address: {person.address.street} </li>
        <li>City: {person.address.zipCode} {person.address.city}</li>
        <li>Country: {person.Country} </li>
      </ul>
      <Button variant="primary" onClick={handleShow}>
        Edit details
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  }

  /*
          <ul>
          <li>Name: {person.firstName} {person.lastName} </li>
          <li>Birthdate: {person.birthDate} </li>
          <li>Email: {person.email} </li>
          <li>Address: {person.address.street} </li>
          <li>City: {person.address.zipCode} {person.address.city}</li>
          <li>Country: {person.Country} </li>
        </ul>
       <FormValidation05 friend={person} onSave={onSave} onUndo={onUndo}/>
*/
