import { configureStore } from "@reduxjs/toolkit";
import { moredetailReducer, pokemon, pokemondetailReducer } from './teamSlice'
import { movesReducer } from "./moveSlice";
import pokemonReducer  from './pokemonSlice'
export const store = configureStore({
    reducer: {
        pokemon: pokemon,
        moves : movesReducer,
        // pokemonSearch: pokemonSearch,
        pokemondetail: pokemondetailReducer,
        moredetail: moredetailReducer,
        pokemonitem: pokemonReducer,
    }
})