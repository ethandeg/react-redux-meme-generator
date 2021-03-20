import {useSelector} from "react-redux"
import Meme from "./Meme"
const MemeList = () => {
    const memes = useSelector(store => store.memes)
    return (
        <>
        {memes.map(meme => (
            <>
            <Meme key={meme.id} meme={meme} />
            </>
        ))}
        </>
    )
}

export default MemeList