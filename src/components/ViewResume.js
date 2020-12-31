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
                        <ul className="list-group">
                            <li className="list-group-item">
                                <h1>{res.firstName} {res.lastName}</h1>
                                <h4>Details</h4>
                                <p>{res.address}</p>
                                <p>{res.phone}</p>
                                <h4>Education</h4>
                                {
                                    res.education ?  res.education.map(edu =>
                                        <p><b>{edu.degree}</b> from <b>{edu.institution}</b> in <b>{edu.year}</b></p> ): null

                                }
                                <h4>Experience</h4>
                                {
                                    res.experience ?  res.experience.map(exp =>
                                        <p><b>{exp.designation}</b> from <b>{exp.company}</b> in <b>{exp.year}</b></p> ): null

                                }
                            </li>
                        </ul>
                    ))

                    : <h3>No resumes</h3>
            }
        </div>
    )
}

export default ViewResume;
