import { CakeState } from "./CakeState";

export const CakeReducer = (state=CakeState, action) => {
    switch (action.type) {
        case "BUY_CAKE":
            return {
                ...state,
                cubcake: state.cubcake - action.payload,
            };
        case "BUY_ICECREAM":
            return {
                ...state,
                icecream: state.icecream - action.payload,
            };
        case "BUY_BCAKE":
            return {
                ...state,
                bcake: state.bcake - action.payload,
            };
        case "ADD_CAKE":
            return {
                ...state,
                cubcake: state.cubcake + Number(action.payload),
            };
        case "ADD_ICECREAM":
            return {
                ...state,
                icecream: state.icecream + Number(action.payload),
            };
        case "ADD_BCAKE":
            return {
                ...state,
                bcake: state.bcake + Number(action.payload),
            };
        default:
            return state;
    }
};