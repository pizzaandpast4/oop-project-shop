import { PageContact } from "./PageContact.js";
import { PageHome } from "./PageHome.js";
import { PageServices } from "./PageServices.js";
import { PageTeam } from "./PageTeam.js";

export class Layout {
    constructor() {
        this.render();
    }

    header() {
        const HTML = `
            <header class="container main-header">
                <div class="row">
                    <div class="col-12 main-header-content">
                        <img class="logo" src="./img/logo.png" alt="Logo">
                        <nav class="hidden visible-sm-flex main-nav">
                            <button class="link">Home</button>
                            <button class="link">Services</button>
                            <button class="link">Team</button>
                            <button class="link">Contact us</button>
                        </nav>
                    </div>
                </div>
            </header>`;
        return HTML;
    }

    headerEvents() {
        const buttonsDOM = document.querySelectorAll('.main-header-content button');

        for (const buttonDOM of buttonsDOM) {
            buttonDOM.addEventListener('click', () => {
                if (buttonDOM.textContent === 'Home') {
                    console.log((new PageHome()).render());
                }
                if (buttonDOM.textContent === 'Services') {
                    console.log((new PageServices()).render());
                }
                if (buttonDOM.textContent === 'Team') {
                    console.log((new PageTeam()).render());
                }
                if (buttonDOM.textContent === 'Contact us') {
                    console.log((new PageContact()).render());
                }
            });
        }
    }

    main() {
        const pageObject = new PageContact();
        const HTML = `
            <main class="container">
                ${pageObject.render()}
            </main>`;

        return HTML;
    }

    footer() {
        const HTML = '<footer class="container">&copy; Copyright 2024</footer>';
        return HTML;
    }

    render() {
        const DOM = document.getElementById('app');
        const HTML = this.header() + this.main() + this.footer();

        DOM.insertAdjacentHTML('beforeend', HTML);

        this.headerEvents();
    }
}