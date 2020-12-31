import { ADD_RESUME} from '../constants/action-types.js';


export function addResume(payload) {
    return { type: ADD_RESUME, payload }
};
