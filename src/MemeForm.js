import {useState} from "react"
import {useDispatch} from "react-redux"
import { v4 as uuidv4 } from 'uuid';
const MemeForm = () => {
    const INITIAL_STATE = {img: '', topText:'', bottomText:''}
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name] : value
        }))
    }
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        formData.id = uuidv4()
        dispatch({type: 'ADD', payload: formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='img'>Image Url:</label>
            <input type="text" id='img' name='img' onChange={handleChange} value={formData.img}/>
            <label htmlFor="topText">Top Text:</label>
            <input type="text" id="topText" name="topText" onChange={handleChange} value={formData.topText} />
            <label htmlFor="bottomText">Bottom Text:</label>
            <input type="text" id="bottomText" name="bottomText" onChange={handleChange} value={formData.bottomText} />
            <button>Submit</button>
        </form>
        
    )
}


export default MemeForm