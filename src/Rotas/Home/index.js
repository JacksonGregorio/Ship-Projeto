
import logo from '../../fotos/logo.jpg';
import React from 'react';
import Navbar from '../../navbar/navbar';
import './index.css';

function Home() {


  return (
    
 <body>
        <Navbar />
    <div class="main">

     <img src={logo} ></img>      
    <div class="form-space">
        <div id="introduction-text">
            <p>Discover the universe!<br></br>
                Join the best community in the games world
                and conquer the unexplored
            </p>

        </div>

        <form action="#" method="post">

            <div class="input">
                <label for="first_name">First Name*</label>
                <input type="text" id="first_name" name="first_name"  required></input>
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
                <input type="email" id="email" name="email" placeholder="youremail@user.com"  required></input>
            </div>

            <div class="input">
                <label for="password">Password* </label>
                <input type="password" id="password" name="password" required></input>
            </div>

            <div class="input">
                <label for="password-confirm">Confirm password* </label>
                <input type="password" id="password-confirm" name="password-confirm"  required></input>
            </div>
            <div class="button">
                <button type="submit" value={"Enviar"}> </button>
            </div>
            </form>



    </div>
</div>

</body>
  );

}
export default Home;
