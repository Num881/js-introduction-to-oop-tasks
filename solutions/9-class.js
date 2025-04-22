import _ from 'lodash';
import {sum} from "lodash/math.js";

// BEGIN
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(item, count) {
        this.items.push({ item, count });
    }
    getItems() {
        return this.items;
    }
    getCost() {
        return this.items.reduce((total, { item, count }) => total + item.price * count, 0);
    }
    getCount() {
        return this.items.reduce((total, { count }) => total + count, 0);
    }
}

export default Cart;
// END
