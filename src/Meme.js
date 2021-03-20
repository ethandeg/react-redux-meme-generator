import {useDispatch} from 'react-redux'
const Meme = ({meme}) => {
    const dispatch = useDispatch()
    const remove = () => dispatch({type: "REMOVE", payload: meme})
    return (
        <>
            <p>{meme.id}</p>
            <p>{meme.topText}</p>
            <p>{meme.bottomText}</p>
            <img src={meme.img} style={{height: 200, width: 250}}/>
            <button onClick={remove}>Remove</button> 
        </>

    )

}

export default Meme