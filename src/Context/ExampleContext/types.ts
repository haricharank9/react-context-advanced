// Define the shape of your context state

import { IPokemonv2item } from "../../Models/IPokemon";


// Define the shape of your context
export interface IContextType {
    flipFlag: () => void;
    flag: boolean;
    state: IPokemonv2item[];
    updateHandler: (state: IPokemonv2item) => void;
    refreshState: () => Promise<void>;
}
