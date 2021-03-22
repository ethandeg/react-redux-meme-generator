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
        <div style={{marginLeft: "25%"}} className="mt-5">
        <div className="card col-8">
            <div className="card-body">
                <h2 style={{textAlign: "center"}} className="display-3 text-info">Create a Meme:</h2>
                <form onSubmit={handleSubmit} className="form-control">
                    <div className="form-group">
                        <label htmlFor='img'>Image Url:</label>
                        <input className="form-control" type="text" id='img' name='img' onChange={handleChange} value={formData.img}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="topText">Top Text:</label>
                        <input className="form-control" type="text" id="topText" name="topText" onChange={handleChange} value={formData.topText} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bottomText">Bottom Text:</label>
                        <input className="form-control" type="text" id="bottomText" name="bottomText" onChange={handleChange} value={formData.bottomText} />
                    </div>
                    <div className="form-group my-3">
                        <button className="btn btn-outline-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>

        
    )
}


export default MemeForm