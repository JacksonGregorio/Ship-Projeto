function Home() {
const [name, setName] = ('')
    const [email, setEmail] = ('')
    const [senha1, setSenha1] = ('')
    const [senha2, setSenha2] = ('')
    const [message, setMessage] = ('')

    


    function onEmail (e){
        e.preventDefault();
        if(senha1 != senha2){
            alert("Suas senhas devem ser iguais!")
            return;
        }

        const templateParams = {
            from_name: name,
            message : senha1,
            email : email

        }

        
    }

  return (
    <div class="main">
     <img src={logo} ></img>      
    <div class="form-space">
        <div id="introduction-text">
            <p>Discover the universe!<br></br>
                Join the best community in the games world
                and conquer the unexplored
            </p>

        </div>

        <form action="#" method="post" onSubmit={onEmail}>

            <div class="input">
                <label for="first_name">First Name*</label>
                <input type="text" id="first_name" name="first_name" onChange={(e) => setName(e.target.value)} value={name} required></input>
            </div>
            <div class="input">
                <label for="last_name">Last Name*</label>
                <input type="text" id="last_name" name="last_name" required></input>
            </div>
            <div class="input">
                <label for="nickname">Nickname*</label>
                <input type="text" id="nickname" name="nickname" required></input>
            </div>

            <div class="input">
                <label for="email">Email* </label>
                <input type="email" id="email" name="email" placeholder="youremail@user.com" onChange={(e) => setEmail(e.target.value)} value={email} required></input>
            </div>

            <div class="input">
                <label for="password">Password* </label>
                <input type="password" id="password" name="password" onChange={(e) => setSenha1(e.target.value)} value={senha1} required></input>
            </div>

            <div class="input">
                <label for="password-confirm">Confirm password* </label>
                <input type="password" id="password-confirm" name="password-confirm" onChange={(e) => setSenha2(e.target.value)} value={senha2} required></input>
            </div>
            <div class="button">
                <button type="submit" value={"Enviar"}> </button>
            </div>
            </form>



    </div>
</div>


  );

}
export default Home;
