import React, { useState } from 'react'
import {Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NewTest = () => {
    const [heading,setheading] = useState('')
    const [subheading,setSubheading] = useState('')
    const [shortdesc,setshortdesc] = useState('')
    const [image,setimage] = useState('')


    async function FormSubmit (event) {
        console.log(heading, subheading, shortdesc,image)
        event.preventDefault();
        const formData = new FormData();
        formData.append('heading', heading);
        formData.append('subheading', subheading);
        formData.append('shortdesc', shortdesc);
        formData.append('file', image);
        console.log(formData)

        let result = await fetch('http://localhost:5000/api/home/banner', {
            method: 'POST',
            body: formData,
        });
        alert("data has set", result);
    }
    return (
        <div>
            <Form onSubmit={() => FormSubmit} action="/post" method="POST" encType="multipart/form-data">

                <Form.Group className="mb-3">
                    <Form.Label>heading</Form.Label>
                    <Form.Control type="text" placeholder="heading" value={heading} onChange={(e) => setheading(e.target.value)} name='heading' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>SubHeading</Form.Label>
                    <Form.Control type="text" placeholder="SubHeading" value={subheading} onChange={(e) => setSubheading(e.target.value)} name='subheading' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Paragraph</Form.Label>
                    <Form.Control type="text" placeholder="Short desc" value={shortdesc} onChange={(e) => setshortdesc(e.target.value)} name='shortdesc' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Banner Image</Form.Label>
                    <Form.Control type="file" placeholder="Short desc" onChange={(e) => setimage(e.target.files[0])} name="file" />
                    {/* <Form.Control type="file" ref={fileInputRef} onChange={imagehandler} name='banner' /> */}
                </Form.Group>

                <Button type="submit" onClick={FormSubmit}>Submit</Button>
            </Form>
        </div>
    )
}

export default NewTest
