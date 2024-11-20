import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOneTalent } from "../src/utilities/controllers.mjs";


function Signup(){
    const nav = useNavigate();

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password: '',
        confirm_password:'',
    })


    function handleChange(e) {
        setFormData({
            ...formData,
        [e.target.name]: e.target.value
        });
        }
    
    async function handleSubmit(e){
        try {
            e.preventDefault()
            if (formData.password !== formData.confirm_password) {
                console.log('Passwords do not match')
            } else {
                let res = await createOneTalent(formData)
                // nav('/:id') ////navigate to talent profile page
            }
        } catch (error) {
            console.error(error)
        }
    } //posting to DB

    return (
        <div className="forms">
            <h2>Welcome!</h2>
            <h4>Sign up as a voice talent now!</h4>
            <form onSubmit={handleSubmit}>
                <section className="formRow">
                <label className="formLabel" htmlFor="name1">Name: </label>
                    <input
                    className="formField"
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="Please enter your first and last name"
                    /><br/>
                </section>
                <section className="formRow">
                    <label className="formLabel" htmlFor="email1">Email: </label>
                        <input
                        className="formField"
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Please enter your email"
                        /><br/>
                </section>
                <section className="formRow">
                    <label className="formLabel" htmlFor="password1">Password: </label>
                        <input
                        className="formField"
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="Please create a password with at least 6 characters and/or numbers"
                        minLength='6'
                        /><br/>
                </section>

                <section className="formRow">
                    <label className="formLabel" htmlFor="confirm_password">Confirm Password: </label>
                        <input
                        className="formField"
                        onChange={handleChange}
                        type="password"
                        name="confirm_password"
                        placeholder="Please confirm your password"
                        minLength='6'
                        />
                </section>
                <button type='submit'>Sign Up</button>
            </form>
            <p>Already have an account? <a>Log In</a></p>
        </div>
    )
}

export default Signup

{/* <div className='forms'>
<h2>SignUp</h2>
<form autoComplete='off'onSubmit={handleSubmit}>
  <label htmlFor='name1'>Name: </label>
  <input
    onChange={handleChange}
    type='text'
    id='name1'
    name='name'
    placeholder='First and Last Name'
  />
  <label htmlFor='email1'>Email: </label>
  <input
    onChange={handleChange}
    type='email'
    id='email1'
    name='email'
    placeholder='Email'
  />
  <label htmlFor='password1'>Password: </label>
  <input
    onChange={handleChange}
    type='password'
    id='password1'
    name='password'
    placeholder='Password'
    minLength='6'
  />
  <input
    onChange={handleChange}
    type='password'
    id='password2'
    name='password2'
    placeholder='Confirm Password'
    minLength='6'
  />
  <button type='submit'>Sign Up</button>
</form>
<p>
  Already have an account? <button onClick={handleClick}>Sign In</button>
</p>
</div> */}
