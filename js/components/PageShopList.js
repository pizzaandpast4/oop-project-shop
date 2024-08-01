export class PageShopList {
    constructor(DOM) {
        this.DOM = DOM;

        this.render();
        this.listEvents();
    }

    minus(rowDOM, buttonDOM) {
        const amountChange = +buttonDOM.dataset.step;
        const idToDecrease = rowDOM.id;
        const amountDOM = rowDOM.querySelector('span');
        const localStorageData = localStorage.getItem('itemList');
        const list = JSON.parse(localStorageData)
            .map(item => item.id === idToDecrease
                ? {
                    ...item,
                    amount: item.amount - amountChange > 0 ? (item.amount - amountChange) : 0,
                }
                : item);

        localStorage.setItem('itemList', JSON.stringify(list));
        amountDOM.textContent = list.filter(item => item.id === idToDecrease)[0].amount;
    }

    plus(rowDOM, buttonDOM) {
        const amountChange = +buttonDOM.dataset.step;
        const idToIncrement = rowDOM.id;
        const amountDOM = rowDOM.querySelector('span');
        const localStorageData = localStorage.getItem('itemList');
        const list = JSON.parse(localStorageData)
            .map(item => item.id === idToIncrement
                ? {
                    ...item,
                    amount: item.amount + amountChange,
                }
                : item);

        localStorage.setItem('itemList', JSON.stringify(list));
        amountDOM.textContent = list.filter(item => item.id === idToIncrement)[0].amount;
    }

    delete(rowDOM, buttonDOM) {
        const idToRemove = rowDOM.id;
        const localStorageData = localStorage.getItem('itemList');
        const list = JSON.parse(localStorageData).filter(item => item.id !== idToRemove);
        localStorage.setItem('itemList', JSON.stringify(list));
        rowDOM.remove();
    }

    listEvents() {
        const rowsDOM = this.DOM.querySelectorAll('tbody > tr');
        const funcList = {
            minus: this.minus,
            plus: this.plus,
            delete: this.delete,
        };

        for (const rowDOM of rowsDOM) {
            const buttonsDOM = rowDOM.querySelectorAll('button');

            for (const buttonDOM of buttonsDOM) {
                buttonDOM.addEventListener('click', () => funcList[buttonDOM.dataset.method](rowDOM, buttonDOM));
            }
        }
    }

    render() {
        const data = JSON.parse(localStorage.getItem('itemList'));
        let HTML = '';

        if (data) {
            for (const item of data) {
                HTML += `
                    <tr id="${item.id}">
                        <td>${item.title}</td>
                        <td>
                            <button data-method="minus" data-step="10">-10</button>
                            <button data-method="minus" data-step="1">-1</button>
                            <span>${item.amount}</span>
                            <button data-method="plus" data-step="1">+1</button>
                            <button data-method="plus" data-step="10">+10</button>
                        </td>
                        <td>
                            <button data-method="delete">Delete</button>
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