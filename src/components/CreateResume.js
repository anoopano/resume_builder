import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
import { connect } from 'react-redux';
import { addResume } from '../actions/index.js'
import { useDispatch } from 'react-redux';


function CreateResume() {

    const dispatch = useDispatch();

    const handleSubmit = (value) => {
      
        dispatch(addResume(value));
    }


    return (
        <div className="container w-75 border  border-secondary mt-5 mb-5 bg-light">

            <div className="d-flex mt-5 justify-content-between">
                <p>Create resume</p>
                <Link to="/resumes" className="text-decoration-none">View resumes</Link>
            </div>
            <Form onSubmit={handleSubmit} />
        </div>
    )


}


export default CreateResume;
