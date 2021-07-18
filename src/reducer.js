import { useContext } from "react"
import { DataLayerContext } from "./DataLayer"

export const initialState = {
    user: null,
    playlists: [],
    discover_weekly: null,
    playing: false,
    item: null,
    // token: "BQA6vFacyoNicY79ScSR8RSjzojtGds2XeBthPcNlLQxtkhT1lKbgzx1QIWhkbXQkN-TGuM7aUS751oktITrXbBlhgsqVl3TpcZvK4gtXi0FfAqbnYlH_712kyr6cCzTmz8O6sTa1sgOaqbqq2r77Wve7STbYzztzE16P4r3wn7P2py32m2i"
    token:null
}

const reducer = (state, action) => {
    // console.log("hehe", action)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state
    }
}


export default reducer;


export const useDataLayerValue = () => useContext(DataLayerContext);