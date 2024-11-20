import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup(){
    const nav = useNavigate();

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password: '',
        confirm_password:'',
    })

    function handleClick(e){
        nav('/') //navigate back to home page
    }
    function handleChange(e) {
        setFormData({
            ...formData,
        [e.target.name]: e.target.value
        });
        }
    
    async function handleSubmit(e){
        try {
            e.preventDefault()
            if (formData.password !== formData.password2) {
                console.log('Passwords do not match')
            } else {
                let res = await createTalent(formData)
                nav('/:id') ////navigate to talent profile page
            }
        } catch (error) {
            console.error(error)
        }
    } //posting to DB

    return (
        <>
        <form onSubmit={handleSubmit}>

        </form>
        </>
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
