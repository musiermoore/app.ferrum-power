import {makeAutoObservable} from "mobx";

export default class AdminOrderStore {
    constructor() {
        this._orders = []
        this._order = {}
        this._needUpdateOrder = true;

        makeAutoObservable(this)
    }

    setOrder(order) {
        this._order = order;
    }

    setOrders(orders) {
        this._orders = orders;
    }

    setUpdateOrderList(bool) {
        this._needUpdateOrder = bool;
    }

    setNeedUpdateOrder(bool) {
        this._needUpdateOrder = bool;
    }

    deleteOrderFromStore(order) {
        this.setNeedUpdateOrder(true);
        this._orders = this._orders.filter(element => element.id !== order.id);
    }

    get orders() {
        return this._orders;
    }

    get order() {
        return this._order;
    }

    get needUpdateOrder() {
        return this._needUpdateOrder;
    }
}