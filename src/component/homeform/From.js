import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import ApiCalls from '../../ApiCalls/ApiCalls'
import { useParams } from 'react-router-dom'

const From = () => {

    const [inputs, setInputs] = useState({})
    const params = useParams()
    const { id } = params;
    console.log(id)
    useEffect(() => {
        if (id != "addbanner") {
            getdata()
        }
    }, [params])

    const getdata = () => {

        ApiCalls(`home/banner?_id=${id}`).then((res) => {
            alert("data add successfully")
            setInputs(values => ({ ...values, res }))
            
        })
            .catch((err) => {

            })

    }
    console.warn(inputs)
    // const [inputs, setInputs] = useState({})

    const FormSubmit = (event) => {

        event.preventDefault();
        // console.log(inputs)

        ApiCalls('home/banner', 'POST', inputs).then(() => {
            alert("data add successfully")
        })
            .catch((err) => {

            })

    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))

    }
    return (
        <Container>
            <Row>
                <Col lg='12'>
                    <h4>Add Banner</h4>
                    <Form onSubmit={() => FormSubmit}>

                        <Form.Group className="mb-3">
                            <Form.Label>heading</Form.Label>
                            <Form.Control type="text" placeholder="heading" value={inputs.heading || ""} onChange={handleChange} name='heading' />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>SubHeading</Form.Label>
                            <Form.Control type="text" placeholder="SubHeading" value={inputs.subheading || ""} onChange={handleChange} name='subheading' />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Paragraph</Form.Label>
                            <Form.Control type="text" placeholder="Short desc" value={inputs.shortdesc || ""} onChange={handleChange} name='shortdesc' />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Banner Image</Form.Label>
                            <Form.Control type="file" placeholder="Short desc" value={inputs.profile || ""} onChange={handleChange} name='profile' />
                        </Form.Group>

                        <Button type="submit" onClick={FormSubmit}>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default From
