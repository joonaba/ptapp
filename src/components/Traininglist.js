import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import DeleteTraining from './Deletetraining.js'
const TrainingList = () => {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchTrainings(), []);

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }

    const deleteTraining = (link) => {
        fetch(link, {method: 'DELETE'})
        .then(res => fetchTrainings())
        .catch(err => console.error(err))
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
            
            Cell: row => <DeleteTraining deleteTraining={deleteTraining} training={row.original} />

        }
        
    ]
    return (
        <div>
            <ReactTable data={trainings} columns={columns} />
        </div>

    );
}

export default TrainingList;