export default function darkMode(state = false, action){
    switch(action.type){
        case "TOGGLE_DARK_MODE":
            return !state;
        default:
            return state
    }
}