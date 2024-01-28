import React from 'react'
import { Button, Stack, Table, } from 'react-bootstrap'
import ApiCalls from '../ApiCalls/ApiCalls';

const Testimonial = () => {
    // const bannerdata = ApiCalls('testimonials');
    return (
        <>
            <h4>Banners</h4>
            <Button variant='primary' className='my-3'>Add New</Button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        
                        <th>Name</th>
                        <th>Image</th>
                        <th>Profession</th>
                        <th>Comment</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {
                        bannerdata.map((item, key) =>
                            <tr key={key}>
                                <td>{key + 1}</td>
                                
                                <td>{item.name}</td>
                                <td><img src={item.imgurl} alt="pic" /></td>
                                <td>{item.profesion}</td>
                                <td>{item.comment}</td>
                                <td>
                                    <Stack direction='horizontal' gap={2}>
                                        <Button variant='primary'>view</Button>
                                        <Button variant='primary'>Edit</Button>
                                        <Button variant="danger">Delete</Button>
                                    </Stack>
                                </td>
                            </tr>
                        )

                    }

                </tbody> */}
            </Table>
        </>
    )
}

export default Testimonial
