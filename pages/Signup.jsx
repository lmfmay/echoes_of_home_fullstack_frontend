function Signup(){
    return (
        <>
        <form action="">

        </form>
        </>
    )
}

export default Signup

{/* <section id="loginpg">
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
____________________
function CreateForm(){
    const nav = useNavigate();

    const [formData, setFormData] = useState({
        name:'',
        price:'',
        stocked: false,
        category:'Vegetables'
    })

    function handleClick(e){
        nav('/') //navigate back to home page
    }
    function handleChange(e) {
        if (e.target.name == 'stocked'){
            setFormData({
                ...formData,
            stocked: !formData.stocked
        });
        } else {
            setFormData({
                ...formData,
            [e.target.name]: e.target.value
        });
        }
    }
    async function handleSubmit(e){
        try {
            e.preventDefault()
            let res = await createProduce(formData)
            // setInventory([...inventory,res]) //don't need this anymore since useEffect added to filterable table
            nav('/') ////navigate back to home page
        } catch (error) {
            console.error(error)
        }
    } //needs async because going to DB

    return(
        <>
        <h2>Create Produce</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input onChange={handleChange} type="text" name="name"/>
            </label><br/>
            <label>
                Price: <input onChange={handleChange} type="number" name="price"/>
            </label><br/>
            <label>
                In Stock: <input onChange={handleChange} type="checkbox" name="stocked"/>
            </label><br/>
            <label>
                Category:{' '}
                <select onChange={handleChange} name="category" type='text'>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                </select>
            </label><br/>
            <input type="submit"/>
        </form>
        <button onClick={handleClick}>Close Form</button>
        </>
    )
}