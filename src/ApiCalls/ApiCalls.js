import { useEffect, useState } from "react";

const ApiCalls = async (params, method = 'GET', value = null) => {
    try {
        const resdata = await fetch(`http://localhost:5000/api/${params}`, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: method !== 'GET' && value ? JSON.stringify(value) : null,
        })
        if (!resdata.ok) {
            throw new Error(`HTTP error! Status: ${resdata.status}`);
        }

        const Data = await resdata.json();
        return Data
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
}

export default ApiCalls