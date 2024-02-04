import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import ApiCalls from '../../ApiCalls/ApiCalls'
import { useParams } from 'react-router-dom'

const EditForm = () => {
    // const inputfile = useRef(null);
    const [image, setimage] = useState(null)
    const [inputs, setInputs] = useState({})
    const params = useParams()
    const { id } = params;
    useEffect(() => {
        getdata()
    }, [id])

    const getdata = () => {

        ApiCalls(`home/banner?_id=${id}`).then((res) => {
            const data = res[0];
            setInputs(data);
        })
            .catch((err) => {

            })

    }
    // console.warn(inputs)
    // const [inputs, setInputs] = useState({})

    async function FormSubmit(event) {
        event.preventDefault();
        console.log(inputs)
        console.log(image)

        const formData = await new FormData();
        formData.append('heading', inputs.heading);
        formData.append('subheading', inputs.subheading);
        formData.append('shortdesc', inputs.shortdesc);
        formData.append('file', image);



        ApiCalls(`home/banner/${id}`, 'PUT', formData).then(() => {
            alert("data updata successfully")
        })
            .catch((err) => {

            })

    }

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value })

    }

    const imagehandler = (event) => {
        const value = event.target.files[0];
        // const name = event.target.name;
        setimage(value);
    }

    return (
        <Container>
            <Row>
                <Col lg='12'>
                    <h4>Edit Banner</h4>
                    <Form onSubmit={() => FormSubmit} action="/post" method="POST" encType="multipart/form-data">

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

                        <Form.Group className="mb-3" >
                            <Form.Label>Banner Image</Form.Label>

                            <Form.Control type="file" onChange={imagehandler} name="file" />
                            {
                                image !== null ? <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
                                    : <img src={inputs.banner} alt="upload" className="img-display-before" />
                            }

                        </Form.Group>

                        <Button type="submit" onClick={FormSubmit}>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default EditForm
