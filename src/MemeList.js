import {useSelector} from "react-redux"
import MemeForm from "./MemeForm"
import Meme from "./Meme"
const MemeList = () => {
    const memes = useSelector(store => store.memes)
    return (
        <>
        <MemeForm />
        {memes.map(meme => (
            <Meme key={meme.id} meme={meme} />
        ))}
        </>
    )
}

export default MemeList