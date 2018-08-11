import {DATA_ACTIONS} from './actions';
import {Map} from 'immutable';

// reducer with initial state
const initialState = new Map({
    fetching: false,
    data: null,
    error: null,
    webdata: null
});

export default function datareducer(state = initialState, action) {
    switch (action.type) {
        case DATA_ACTIONS.API_CALL_REQUEST:
            return state;

        case DATA_ACTIONS.API_CALL_SUCCESS:
            return state;

        case DATA_ACTIONS.API_GETCALL_SUCCESS:
            return state.set('webdata', action.data);
        case DATA_ACTIONS.API_GETMAILCALL_SUCCESS:
            return state.set('mail', action.data);

        case DATA_ACTIONS.API_CALL_FAILURE:
            return state;
        default:
            return state;
    }
}