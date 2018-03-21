import request from "superagent";

const BASE_URL = "https://morning-falls-3769.herokuapp.com/api";

const REQUEST_MESSAGES = "synap/messages/request";
const REQUEST_MESSAGES_SUCCESS = "synap/messages/request_success";
const REQUEST_PERSON_DETAIL = "synap/messages/request_person_detail";
const REQUEST_PERSON_DETAIL_SUCCESS =
    "synap/messages/request_person_detail_success";
const REQUEST_ERROR = "synap/messages/request_error";
const INC_START = "synap/messages/inc_page";

const MSG_PER_PAGE = 20;

const initialState = {
    data: [],
    person: null,
    loadingPerson: false,
    loadingMessages: false,
    start: 1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_MESSAGES: {
            return {...state, loadingMessages: true};
        }
        case REQUEST_MESSAGES_SUCCESS: {
            return {...state, loadingMessages: false, data: [...state.data, ...action.data]};
        }
        case REQUEST_PERSON_DETAIL: {
            return {...state, loadingPerson: true};
        }
        case REQUEST_PERSON_DETAIL_SUCCESS: {
            return {...state, loadingPerson: false, person: action.person};
        }
        case REQUEST_ERROR: {
            return {...state, loadingPerson: false, loadingMessages: false};
        }
        case INC_START: {
            return {...state, start: state.start + MSG_PER_PAGE}
        }
        default: {
            return state;
        }
    }
};

const requestMessages = (start) => dispatch => {
    dispatch({
        type: REQUEST_MESSAGES
    });
    const req = request.get(`${BASE_URL}/messages`);
    req.query({start, count: MSG_PER_PAGE}).end((err, resp) => {
        dispatch({
            type: REQUEST_MESSAGES_SUCCESS,
            data: resp.body
        });
        dispatch({
            type: INC_START
        })
    });
};

const requestPersonDetail = ({from}) => dispatch => {
    dispatch({
        type: REQUEST_PERSON_DETAIL
    });
    request.get(`${BASE_URL}/people/${from}`).end((err, resp) => {
        if (err) {
            dispatch({
                type: REQUEST_ERROR,
                err
            });
        } else {
            dispatch({
                type: REQUEST_PERSON_DETAIL_SUCCESS,
                person: resp.body
            });
        }
    });
};

export default reducer;
export {requestMessages, requestPersonDetail};
