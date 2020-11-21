import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Table } from 'react-bootstrap';

const MedicalScanDetails = () => {

    const [formData, setFormData] = useState({
        scanList: '',
        discount: '',
        scanAmount: '',
    })

    const {
        scanList,
        discount,
        scanAmount,

    } = formData

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        console.log('row added')
    }

    return (
        <div>
            <Form>
                <Form.Group as={Row} >
                    <h3> Medical Scan Details</h3>
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm={1}>
                        Scan List
                </Form.Label>

                    <Col sm={2}>
                        <Form.Control type="text"
                            value={scanList} name='scanList' onChange={handleChange} />
                    </Col>

                    <Form.Label column sm={1}>
                        Scan Amount
                </Form.Label>

                    <Col sm={2}>
                        <Form.Control type="number"
                            value={scanAmount} name='scanAmount' />
                    </Col>

                    <Form.Label column sm={1}>
                        Discount
                     </Form.Label>

                    <Col sm={2}>
                        <Form.Control type="text"
                            value={discount} name='discount' onChange={handleChange} />
                    </Col>

                    <Col sm={1}>
                        <Button variant="primary"
                            onChange={handleChange}
                            onSubmit={handleSubmit}>Add</Button>{' '}
                    </Col>

                </Form.Group>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Scan Name</th>
                            <th>Scan Amount</th>
                            <th>Discount</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>CT Brain</td>
                            <td>200</td>
                            <td>10</td>
                            <td>190</td>
                        </tr>

                    </tbody>
                </Table>
            </Form>

        </div>
    )
}

export default MedicalScanDetails
