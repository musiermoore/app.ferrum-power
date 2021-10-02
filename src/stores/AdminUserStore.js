import {makeAutoObservable} from "mobx";

export default class AdminUserStore {
    constructor() {
        this._users = []
        this._user = {}
        this._needUpdateUser = true;

        makeAutoObservable(this)
    }

    setUser(user) {
        this._user = user;
    }

    setUsers(users) {
        this._users = users;
    }

    setUpdateUserList(bool) {
        this._needUpdateUser = bool;
    }

    deleteUserFromStore(user) {
        this.setUpdateUserList(true);
        this._users = this._users.filter(element => element.id !== user.id);
    }

    get users() {
        return this._users;
    }

    get user() {
        return this._user;
    }

    get needUpdateUser() {
        return this._needUpdateUser;
    }
}