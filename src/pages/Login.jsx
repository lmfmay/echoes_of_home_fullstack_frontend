//WORK IN PROGRESS
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneTalent } from "../src/utilities/controllers.mjs";


function Login(){
    const nav = useNavigate();
    const {id} = useParams();

    const [formData, setFormData] = useState({
        email:'',
        password: '',
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
            let res = await getOneTalent(id)
            if (e.target.name) {
                
            }
            // nav('/:id') ////navigate to talent profile page
             
        } catch (error) {
            console.error('Invalid credentials',error)
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

export default Login