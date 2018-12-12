import { routerRedux } from "dva/router";

export default {
    namespace: 'main',
    state: {
        calendarDisplayed: "admin"
    },
    reducers: {
        setField(state, action) {
            console.log("此处action", action)
            const {name, value} = action;
            let obj = {};
            obj[name] = value;
            let newState = Object.assign({}, state, obj);
            return Object.assign({}, newState, {dirty: true});
        },
    },
    effects: {
        * redirect (action, { put }) {
            const { path, reload } = action;
            yield put(routerRedux.push(path || '/'));
            if(reload) {
                window.location.reload();
            }
        }
    }

}