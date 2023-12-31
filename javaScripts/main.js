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
                </ul>
            </div>
        </div>

    </div>


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