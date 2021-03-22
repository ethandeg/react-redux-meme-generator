import {useSelector} from "react-redux"
import MemeForm from "./MemeForm"
import Meme from "./Meme"
const MemeList = () => {
    const memes = useSelector(store => store.memes)
    return (
        <div className="container" style={{display: "flex"}}>
        {memes.map(meme => (
            <Meme key={meme.id} meme={meme} />
        ))}
        </div>
    )
}

export default MemeList