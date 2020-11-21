import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';
import PatientDetails from './components/PatientDetails'
import MedicalScanDetails from './components/MedicalScanDetails'


function App() {


    const handleSubmit = (event) => {
        event.preventDefault();
        alert('name changed')
    }

    return (
        <Form>
            <PatientDetails />
            <MedicalScanDetails />
        </Form>
    );

}

export default App;