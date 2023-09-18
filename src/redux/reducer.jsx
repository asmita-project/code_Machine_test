import { Add_FEEDBACK } from "./action";

const initialState = {
    feedBack: [],
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_FEEDBACK:
            return {
                ...state,
                feedBack: [...state.feedBack, action.payload],
            };
      
        default:
            return state;
    }
};

export default UserReducer;