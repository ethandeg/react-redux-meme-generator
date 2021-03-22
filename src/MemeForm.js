import {useState} from "react"
import {useDispatch} from "react-redux"
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
        formData.id = 2
        dispatch({type: 'ADD', payload: formData})

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='img'>Image Url:</label>
            <input type="text" id='img' name='img' onChange={handleChange} value={formData.img}/>
            <label htmlFor='top-text'>Top Text:</label>
            <input type="text" id='top-text' name='top-text' onChange={handleChange} value={formData.topText}/>
            <label htmlFor='bottom-text'>Bottom Text</label>
            <input type="text" id='bottom-text' name='bottom-text' onChange={handleChange} value={formData.bottomText}/>
            <button>Submit</button>
        </form>
        
    )
}


export default MemeForm