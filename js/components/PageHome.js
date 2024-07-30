export class PageHome {
    constructor(DOM) {
        this.DOM = DOM;

        this.render();
    }

    render() {
        this.DOM.innerHTML = `
            <section class="row">
                <div class="col-12">
                    <h1>Home page</h1>
                    <p>Welcome to the main page!</p>
                </div>
            </section>`;
    }
}