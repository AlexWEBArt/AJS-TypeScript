import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    amount(): number {
        return this._items.reduce((acc, item) => 
        acc + item.price
    , 0)
    }

    amountDiscount(discount: number): number {
        return this.amount() - this.amount() * discount / 100
    }

    delet(id: number): void {
        const index: number = this._items.findIndex( item => item.id === id)
        if (index >= 0) {
            this._items.splice(index, 1)
        }
    }
}