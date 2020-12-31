import { ADD_RESUME } from '../constants/action-types';

const initialState = {
    resume: [],
}

function rootReducer(state = initialState, action) {


    switch (action.type) {
        case ADD_RESUME:
            state.resume.push(action.payload);
            return state;

        default:
            return state;
    }


}

export default rootReducer;