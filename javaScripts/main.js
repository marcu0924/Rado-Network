class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="header">
        <div class="innerheader">
            <div class="thing">
                <div class="logo_container">
                    <a href="home.html"><img id="logo" src="PNG/rnlogopossibly.png"/></a>
                </div>
                <ul class="navigation">
                    <a href="desktops.html"><li>Desktops</li></a>
                    <a href="laptops.html"><li>Laptops</li></a>
                    <a href="cases.html"><li>Cases</li></a>
                    <a href="company.html"><li>Company</li></a>
                    <button class="login">Login</button>
                </ul>
            </div>
        </div>

    </div>
    <!--
    <div class="wrappercontainer">
    <div class="wrapper">
        <span class="icon-close"><ion-icon name="close"></ion-icon></span>     

        <div class="form-box logins">
            <h2>Login</h2>
            <form action="#">
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail"></ion-icon></span>
                    <input type="email" required>
                    <label>Email</label>

                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" required>
                    <label>Password</label>

                </div>
                <div class="remember-forgot">
                    <label><input type="checkbox">
                    Remember Me</label>
                    <a href="#">Forgot Password</a>
                </div>
                <button type="submit" class="btn">Login</button>
                <div class="login-register">
                    <p>Don't have an account?
                    <a href="#" class="register-link">Register</a></p>
                </div>
            </form>
        </div>
        <div class="form-box register">
        <h2>Registration</h2>
        <form action="#">
                    <div class="input-box">
                <span class="icon"><ion-icon name="person"></ion-icon></span>
                <input type="text" required>
                <label>Username</label>

            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="mail"></ion-icon></span>
                <input type="email" required>
                <label>Email</label>

            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="password" required>
                <label>Password</label>

            </div>
            <div class="remember-forgot">
                <label><input type="checkbox">
                I agree to the terms and conditions.</label>
                
            </div>
            <button type="submit" class="btn">Register</button>
            <div class="login-register">
                <p>Already have an account?
                <a href="#" class="login-link">Login</a></p>
            </div>
        </form>
    </div>
    </div>
    </div>
    -->


        `
    }
}

customElements.define('main-header', MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer">
                © Copyright 2024 Rado Network
            </div>
        </footer>
        

        `
    }
}

customElements.define('main-footer', MyFooter)