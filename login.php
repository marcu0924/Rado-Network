<?php
include 'temp/header.php';
?>

<link rel="stylesheet" href="CSS/login.css">


<div class="loginbox">
    <form class="loginbox2" action="includes/login.inc.php" method="post">
        <div class="log1"><p >Login</p></div>
        <div class="listback">
            <ul class="list">
                <li><input placeholder="email / username" type="email"></li>
                <li><input placeholder="password" type="password"></li>
                <button class="submit1" name="submit">Submit</button>
                <p>Don't have an account?</p>
                <a href="signup.php">Sign Up</a>
            </ul>
        </div>
    </form>
</div>









<?php 
include 'temp/footer.php';

?>