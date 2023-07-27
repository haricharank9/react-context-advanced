// Custom reducer function to handle state updates

import { IPokemonv2item } from "../../Models/IPokemon";

export enum ExampleReducerActionTypes {
    update = "UPDATE",
    refresh = "REFRESH"
}

// Define the available actions for the reducer
type Action = {
    type: ExampleReducerActionTypes;
    payload?: IPokemonv2item | IPokemonv2item[];
};



export const stateReducer = (state: IPokemonv2item[], action: Action) => {
    switch (action.type) {
        case ExampleReducerActionTypes.update:
            return [
                ...state,
                action.payload as IPokemonv2item,
            ];
        case ExampleReducerActionTypes.refresh:
            return [ ...state, ...action.payload as IPokemonv2item[] ];
        default:
            return state;
    }
};