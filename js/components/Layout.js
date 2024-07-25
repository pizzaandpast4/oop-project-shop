export class Layout {
    constructor() {
        this.render();
    }

    header() {
        const HTML = `
            <header class="container">
                <div class="row">
                    <div class="col-12">
                        <img src="#" alt="Logo">
                        <nav class="hidden visible-sm-flex hidden-md visible-lg-grid hidden-xl visible-xxl-inline-block">
                            <a href="./">Home</a>
                            <a href="./services">Services</a>
                            <a href="./team">Team</a>
                            <a href="./contact-us">Contact us</a>
                        </nav>
                    </div>
                </div>
            </header>`;
        return HTML;
    }

    main() {
        const HTML = `
            <main class="container">
                <section class="row">
                    <h1 class="col-12 main-title">Pirmas posukis</h1>
                </section>
                <section class="row">
                    <div class="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-2 col-xxl-1" style="background: yellow;">A</div>
                    <div class="col-1 m-1 m-sm-3 col-md-2 m-md-4 col-lg-4 m-xl-6 col-xxl-1 m-xxl-10" style="background: orange;">B</div>
                </section>
                <section class="row">
                    <div class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-12">Pirmas posukis</div>
                    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">Pirmas posukis</div>
                    <div class="col-6 col-lg-4 col-xl-3">Pirmas posukis</div>
                    <div class="col-6 col-lg-4 col-xl-3">Pirmas posukis</div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-1">Pirmas posukis</div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">Pirmas posukis</div>
                </section>
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
    }
}