/**
 * Created by yanji on 2018/8/15.
 */
import { combineReducers } from 'redux';
import * as type from '../action/type';

const handleData = (state = {isFetching: true, data: {}}, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
            return {...state, isFetching: true};
        case type.RECEIVE_DATA:
            return {...state, isFetching: false, data: action.data};
        default:
            return {...state};
    }
};
const httpData = (state = {}, action) => {
    switch (action.type) {
        case type.RECEIVE_DATA:
        case type.REQUEST_DATA:
            return {
                ...state,
                [action.category]: handleData(state[action.category], action)
            };
        default:
            return {...state};
    }
};

const personalMenuState = (state = {personalMenuState: false}, action) => {
    switch (action.type) {
        case type.UPDATE_PERSONAL_MENU:
            return {...state, personalMenuState: action.personalMenuState};
        default:
            return {...state};
    }
}

export default combineReducers({
    httpData, personalMenuState
});

