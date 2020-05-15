import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import AddCustomer from './Addcustomer.js'
import EditCustomer from './EditCustomer.js'
import AddTraining from './Addtraining.js'
import DeleteCustomer from './Deletecustomer.js'

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchCustomers(), []);

    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    const deleteCustomer = (link) => {
        fetch(link, {method: 'DELETE'})
        .then(res => fetchCustomers())
        .catch(err => console.error(err))
    }

    const addCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(customer)
        })
        .then(res => fetchCustomers())
        .catch(err => console.error(err))
    }

    const updateCustomer = (customer, link) => {
        fetch(link, {method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(customer)})
        .then(res => fetchCustomers())
        .catch(err => console.error(err))
    }

    const addTraining = (training) => {
        fetch('https://customerrest.herokuapp.com/api/trainings',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(training)
        })
        .then(res => fetchCustomers())
        .catch(err => console.error(err))
    }
    const columns = [
        {
            Header: 'Firstname',
            accessor: 'firstname'
        },
        {
            Header: 'Lastname',
            accessor: 'lastname'
        },
        {
            Header: 'Streetadress',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            
            Cell: row => <EditCustomer updateCustomer={updateCustomer} customer={row.original} />

        },
        {
            
            Cell: row => <AddTraining addTraining={addTraining} customer={row.original}/>

        },
        {
            
            Cell: row => <DeleteCustomer deleteCustomer={deleteCustomer} customer={row.original} />

        }
    ]
    return (
        <div>
            <AddCustomer addCustomer={addCustomer}/>
            <ReactTable data={customers} columns={columns} filterable={true} />
        </div>

    );
}

export default CustomerList;