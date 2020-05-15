import React from 'react';
import './App.css';
import CustomerList from './components/Customerlist.js'
import TrainingList from './components/Traininglist.js'
import TrainingsWithCustomers from './components/Trainingswithcustomers.js'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6">
            PT app  

            <Link to="/">Customers</Link>{' '}
            <Link to="/TrainingList">Trainings</Link>{' '}
            <Link to="/TrainingsWithCustomers">Tranings with customers</Link>{' '}
            
          </Typography>
          
        </Toolbar>
        
      </AppBar>
      
        
        <div>
            <Switch>
                <Route exact path="/" component={CustomerList} />
                <Route path="/TrainingList" component={TrainingList} />
                <Route path="/TrainingsWithCustomers" component={TrainingsWithCustomers} />
               
                
                
            </Switch>

        </div>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
