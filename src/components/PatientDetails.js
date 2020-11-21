import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Radio, RadioGroup } from 'react-radio-group'
import { CountryDropdown } from 'react-country-region-selector';

const PatientDetails = () => {
    const [formData, setFormData] = useState({
        name: '',
        honorific: '',
        gender: '',
        dob: '',
        age: '',
        agequan: '',
        appdate: '',
        phone: '',
        stadd: '',
        stadd2: '',
        city: '',
        state: '',
        pincode: '',
        country: ''
    })

    const {
        name,
        honorific,
        gender,
        dob,
        age,
        agequan,
        appdate,
        phone,
        stadd,
        stadd2,
        city,
        state,
        pincode,
        country
    } = formData

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Form.Group as={Row} >
                <h3> Patient Details</h3>

            </Form.Group>
            <Form.Group as={Row} >
                <Form.Label column sm={1}>
                    Patient Name
                </Form.Label>
                <Col sm="1" className="my-1">

                    <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="honorific"
                        name="honorific"
                        value={honorific}
                        onChange={handleChange}
                        custom
                    >
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>

                    </Form.Control>
                </Col>
                <Col sm={3}>
                    <Form.Control type="text"
                        value={name} name='name' onChange={handleChange} />
                </Col>

                <Form.Label column sm={1}>
                    Gender
                </Form.Label>

                <RadioGroup name="gender" value={gender} onChange={handleChange} >
                    <div className="radio-button-background ">
                        <Radio value="male" className="radio-button" />Male
                    </div>
                    <div className="radio-button-background ">
                        <Radio value="female" className="radio-button" />Female
                    </div>
                </RadioGroup>
            </Form.Group>

            <Form.Group as={Row} >
                <Col sm={1}>
                    <Form.Label >
                        DOB
                </Form.Label>
                </Col>
                <Col sm={4}>
                    <Form.Control type="date"
                        value={dob} name='dob'
                        onChange={handleChange}
                    />
                </Col>
                <Col sm={1}>
                    <Form.Label >
                        Age
                     </Form.Label>
                </Col>
                <Col sm="1" >
                    <Form.Control type="text" name='ageyr' value='' readOnly />
                </Col>

                <Col sm="2" className="my-1">

                    <Form.Control
                        as="select"
                        id="agequan"
                        name="agequan"
                        value={agequan}
                        onChange={handleChange}
                        custom
                    >
                        <option value="year">years</option>
                        <option value="month">Months</option>

                    </Form.Control>
                </Col>
            </Form.Group>


            <Form.Group as={Row} >
                <Col sm={1}>
                    <Form.Label >
                        Appointment Date
                    </Form.Label>
                </Col>
                <Col sm={4}>
                    <Form.Control type="date"
                        value={appdate} name='appdate'
                        onChange={handleChange}
                    />
                </Col>
                <Col sm={1}>
                    <Form.Label >
                        Phone no.
                     </Form.Label>
                </Col>

                <Col sm={3}>
                    <Form.Control type="text"
                        value={phone} name='phone' onChange={handleChange} />
                </Col>

            </Form.Group>


            <Form.Group as={Row} >
                <Col sm={1}>
                    <Form.Label >
                        Address
                    </Form.Label>
                </Col>

                <Col sm={8}>
                    <Form.Control type="text"
                        value={stadd} name='stadd'
                        placeholder='Street Address 2'
                        onChange={handleChange} />
                </Col>

            </Form.Group>

            <Form.Group as={Row} >
                <Col sm={1}>
                </Col>

                <Col sm={8}>
                    <Form.Control type="text"
                        value={stadd2} name='stadd2'
                        placeholder='Street Address 2'
                        onChange={handleChange} />
                </Col>

            </Form.Group>

            <Form.Group as={Row} >
                <Col sm={1}>
                </Col>

                <Col sm={4}>
                    <Form.Control type="text"
                        value={city}
                        name='city'
                        placeholder='City'
                        onChange={handleChange} />
                </Col>
                <Col sm={4}>
                    <Form.Control type="text"
                        value={state}
                        name='state'
                        placeholder='State /Province'
                        onChange={handleChange} />
                </Col>

            </Form.Group>

            <Form.Group as={Row} >
                <Col sm={1}>
                </Col>

                <Col sm={4}>
                    <Form.Control type="text"
                        value={pincode}
                        name='pincode'
                        placeholder='Postal / Zipcode'
                        onChange={handleChange} />
                </Col>
                <Col sm={4}>
                    <CountryDropdown
                        value={country}
                        name='country'
                        onChange={(val) => setFormData({ ...formData, country: val })} />
                </Col>
            </Form.Group>
        </>
    )

}

export default PatientDetails
