import {useDispatch} from 'react-redux'
const Meme = ({meme}) => {
    const dispatch = useDispatch()
    const remove = () => dispatch({type: "REMOVE", payload: meme})
    return (

            <div style={{width: "250px", height: "200px", position: "relative"}} className="mx-3">
            <img src={meme.img} style={{width: "100%", height: "100%"}}/>
            <p style={{position: "absolute", top: "6%", left: "50%", transform: "TranslateX(-50%)", color: "white", backgroundColor: "rgba(0,0,0,0.6)", fontSize: 15}}>{meme.topText}</p>
            <p style={{position: "absolute", bottom: "0%", left: "50%", transform: "TranslateX(-50%)", color: "white", backgroundColor: "rgba(0,0,0,0.6)", fontSize: 15}}>{meme.bottomText}</p>
            <button className="btn btn-md btn-outline-danger my-3" style={{marginLeft: "32%"}} onClick={remove}>Remove</button> 
        </div>


    )

}

export default Meme