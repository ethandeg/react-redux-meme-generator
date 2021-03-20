const INITIAL_STATE = {memes: [{id: 1, img: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
                                topText: 'I am a dog', bottomText: "still a dog"}]}
function memeReducer(state=INITIAL_STATE, action){
    switch (action.type) {
        case "ADD":
            return {...state, memes: [...state.memes, action.payload]}
        case "REMOVE":
            return {...state, memes: state.memes.filter(meme => meme.id !== action.payload.id)}
        default:
            return state
    }
}

export default memeReducer