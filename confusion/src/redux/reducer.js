import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

//the Reducer function receives the current state and action, and returns the current state
//specifying a default value of a parameter, in this case state is initialState
export const Reducer = (state = initialState, action) => {
    return state;
};