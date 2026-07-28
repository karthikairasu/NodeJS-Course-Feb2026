import { profileState } from "./profileState";

export const profileReducer = (state = profileState, action) => {
    switch (action.type) {
        case "FETCH_PROFILE_REQUEST":
            return {...state, loading: true};
        case "FETCH_PROFILE_SUCCESS":
            return {...state, loading: false, profiledata: action.payload};
        case "FETCH_PROFILE_FAILURE":
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};