

import React,{useState} from 'react'
import axios from '../../urlConfig'


const Private = [
  { value: 0, label: 'Private' },
  { value: 1, label: 'Public' }
]
const Playlist = () => {
  const [title, setTitle] = useState("");
  const [privacy, setPrivacy] = useState(1);
    

  // handle submit 
  const handleSubmit = async (e) => {
    e.preventDefault()
    const sendData = {
      title: title,
      privacy:privacy
    }
    if (title === "") {
    return alert('Please first fill all the fields')
}

    try {
      const data = await axios.post('play-list', sendData)
      
      setTitle("")
      setPrivacy("")
      alert('playlist saved successfully')
      
    }
    catch (err) {
      alert('not saved er')
      console.log(err)
     }
      
      
    
  }
  const handleTitleChange = (e) => {
    setTitle( e.currentTarget.value )
   console.log(title)
  
  }
  const handlePrivacySelect = (e) => {
    setPrivacy( e.currentTarget.value)
      
   }
   
  




    return (
     
    <div className="container-fluid ">
    <form onSubmit ={handleSubmit}>
      <h2 className="text-primary mt-3 ml-5 "> New Play list</h2>
      <div className=" mx-4 mt-5 row title mb-3">
        <div className="col-lg-5">
          <div className="form-group">
            <label for="title" className=" ml-5 text-success">
              Title
            </label>
            <input
             
              className="form-control"
              placeholder="Enter play list title" value={title} onChange ={handleTitleChange}
            />
          </div>
        
          <div class="form-group">
            <label for="Privacy" className=" ml-5 text-success">
              Privacy
            </label>
                <select className="form-control"  onChange={handlePrivacySelect}>
                {Private.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
           
            </select>
          </div>
        
      
         
        </div>

      </div>
      <button className=" btnSubmit float-right mr-5 btn-primary">
        Submit
      </button>
    </form>
  </div>
    )
}

export default Playlist;