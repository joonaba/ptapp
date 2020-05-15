import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const TrainingsWithCustomers = () => {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchTrainings(), []);

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings', {method: 'GET'})
        .then(response => response.json())
        .then(data => setTrainings(data))
    }

    

    const columns = [
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },

        {
            Header: 'Customer',
            accessor: 'customer.lastname'
        },
        
        
    ]
    return (
        <div>
            <ReactTable data={trainings} columns={columns} />
        </div>

    );
}

export default TrainingsWithCustomers;