import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function ViewResume() {
    const resume = useSelector(state => state.rootReducer.resume);

    console.log(resume);

    return (
        <div className="container w-75 border  border-secondary mt-5">

            <div className="d-flex mt-5 justify-content-between ">
                <p>My resumes</p>
                <Link to="/" className="text-decoration-none">Create new resume</Link>
            </div>

            {
                resume.length ?
                    resume.map(res => (
                        <ul>
                            <li>
                                <h1>{res.firstName}</h1>

                            </li>
                        </ul>
                    ))

                    : <h3>No resumes</h3>
            }
        </div>
    )
}

export default ViewResume;
