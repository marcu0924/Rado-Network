class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <style>
            body {
                margin: 0;
                font-family: system-ui;
                background-color: rgb(54, 54, 54);
            }
        </style>
        <link rel="stylesheet" href="CSS/headerFooter.css">
        <title>Rado Network</title>
        <div id="headerdiv"><a href="home.html"><img id="logo" src="PNG/rnlogopossibly.png"/></a><div class="container" id="titlebox"><a id="pages1" href="desktops.html">Desktops</a>
        <a id="pages1" href="cases.html">Cases</a><a id="pages1" href="laptops.html">Laptops</a><a id="pages1" href="company.html">Company</a>
        <button id="login">LOGIN</button>
        </div></div>
    </header>

        `
    }
}

customElements.define('main-header', MyHeader)