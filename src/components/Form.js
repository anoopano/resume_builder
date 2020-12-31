import React, { Component } from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import TagAutocomplete from './AutoComplete';


function ContactForm({ handleSubmit }) {


    const renderField = ({ input, label, type, placeholder, meta: { touched, error } }) => (
        <div className="form row">
            <label className="col-sm-2 col-form-label">{label}</label>
            <div className="col-sm-10">
                <input className="form-control mb-3 col-sm-10" {...input} type={type} placeholder={placeholder} />
                {touched && error && <span>{error}</span>}
            </div>
        </div>
    )




    const renderEducation = ({ fields, meta: { error, submitFailed } }) => (


        <ul className="list-group">
            <button type="button" className="btn btn-outline-secondary mt-3 mb-3 w-25" onClick={() => fields.push({})}>
                Add education
                </button>
            {fields.map((education, index) => (
                <li key={index} className="list-group-item">
                    <Field
                        name={`${education}.degree`}
                        type="text"
                        component={renderField}
                        label="Degree"
                        placeholder="degree"
                    />
                    <Field
                        name={`${education}.institution`}
                        type="text"
                        component={renderField}
                        label="Institution name"
                        placeholder="institution name"
                    />
                    <Field
                        name={`${education}.year`}
                        type="text"
                        component={renderField}
                        label="Year"
                        placeholder="year"
                    />
                    <button className="btn btn-outline-secondary ml-auto w-25" onClick={() => fields.remove(index)}>Remove</button>

                </li>

            ))}
        </ul>

    )


    const renderExperience = ({ fields, meta: { error, submitFailed } }) => (


        <ul className="list-group">
            <button type="button" className="btn btn-outline-secondary mt-3 mb-3 w-25" onClick={() => fields.push({})}>
                Add experience
                </button>
            {fields.map((experience, index) => (
                <li key={index} className="list-group-item">
                    <Field
                        name={`${experience}.designation`}
                        type="text"
                        component={renderField}
                        label="Designation"
                        placeholder="designation"
                    />
                    <Field
                        name={`${experience}.company`}
                        type="text"
                        component={renderField}
                        label="Company"
                        placeholder="company"
                    />
                    <Field
                        name={`${experience}.year`}
                        type="text"
                        component={renderField}
                        label="Year"
                        placeholder="year"
                    />
                    <button className="btn btn-outline-secondary ml-auto w-25" onClick={() => fields.remove(index)}>Remove</button>

                </li>

            ))}
        </ul>

    )



    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column mt-5">

            <h4 className="mb-3">Details</h4>

            <div className="form row">
                <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                    <Field className="form-control mb-3 col-sm-10" name="firstName" component="input" type="text" placeholder="first name" />
                </div>
            </div>



            <div className="form row">
                <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                    <Field className="form-control mb-3 col-sm-10" name="lastName" component="input" type="text" placeholder="last name" />
                </div>
            </div>


            <div className="form row">
                <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-10">
                    <Field className="form-control mb-3 col-sm-10" name="address" component="input" type="text" placeholder="address"></Field>
                </div>
            </div>

            <div className="form row">
                <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                    <Field className="form-control mb-3 col-sm-10" name="phone" component="input" type="text" placeholder="phone" />
                </div>
            </div>

            <h4 className="mt-3">Education</h4>

            <FieldArray name="education" component={renderEducation} />


            <h4 className="mt-3">Experience</h4>
            <FieldArray name="experience" component={renderExperience} />

            <h4 className="mt-3">Skills</h4>
            {/*  <Field className="form-control mb-3 col-sm-10" name="skills" component={TagAutocomplete} /> */}

            <button className="btn btn-secondary mt-5 mb-2" type="submit">Create</button>
        </form>

    );

}

// Decorate the form component
ContactForm = reduxForm({
    form: 'contact' // a unique name for this form
})(ContactForm);

export default ContactForm;


