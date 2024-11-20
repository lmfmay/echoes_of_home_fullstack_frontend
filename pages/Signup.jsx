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
            let res = await createTalent(formData)
            nav('/:id') ////navigate to talent profile page
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

/* <section id="loginpg">
<form class="formContain">
    <fieldset>
        <legend id="formlegend"><h2 style="font-weight: 600">Welcome back!</h2></legend>
        <p>Log in to Echoes of Home</p>
        <label style="font-weight: 700;">Email<br>
            <input type="text" name="email" id="talentemail" placeholder="name@company.com" class="formfield">
        </label><br>
        <label style="font-weight: 700;">Password <br>
            <input type="password" name="password" id="talentpassword" placeholder="Enter password" class="formfield">
        </label><br>
        <label>
            <button class="formbutton">Login</button>
        </label><br>
        <a href="#" class="forgotpwlink">Forgot password?</a><br>    
        <a href="../pages/signup.html" class="redirectpglink">Don't have an account yet? Sign Up</a>
    </fieldset>
</form>
</section>
