export class PageShopList {
    constructor(DOM) {
        this.DOM = DOM;

        this.render();
        this.listEvents();
    }

    listEvents() {
        const rowsDOM = this.DOM.querySelectorAll('tbody > tr');

        for (const rowDOM of rowsDOM) {
            const buttonsDOM = rowDOM.querySelectorAll('button');

            buttonsDOM[2].addEventListener('click', () => {
                console.log('deleting...');
            });
        }
    }

    render() {
        const data = JSON.parse(localStorage.getItem('itemList'));
        let HTML = '';

        if (data) {
            for (const item of data) {
                HTML += `
                    <tr>
                        <td>${item.title}</td>
                        <td>
                            <button>-</button>
                            ${item.amount}
                            <button>+</button>
                        </td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>`;
            }
        }

        this.DOM.innerHTML = `
            <section class="row">
                <div class="col-12">
                    <h1>Shop list page</h1>
                    <p>Create your shopping list!</p>
                </div>
            </section>
            <section class="row">
                <table class="col-12">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Amount</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>${HTML}</tbody>
                </table>
            </section>`;
    }
}