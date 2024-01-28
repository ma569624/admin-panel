import React from 'react'
import { Button, Stack, Table, } from 'react-bootstrap'
import ApiCalls from '../ApiCalls/ApiCalls';

const Feature = () => {
    // const bannerdata = ApiCalls('home/feature');
    return (
        <>
            <h4>Banners</h4>
            <Button variant='primary' className='my-3'>Add New</Button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        
                        <th>Heading</th>
                        <th>Image</th>
                        <th>Short Desc</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {
                        bannerdata.map((item, key) =>
                            <tr key={key}>
                                <td>{key + 1}</td>
                                
                                <td>{item.heading}</td>
                                <td><img src={item.imgurl} alt="pic" /></td>
                                <td>{item.shortdesc}</td>
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

export default Feature
