import React, { useEffect, useState } from "react";
import "./upload.css";
import Dropzone from "react-dropzone";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "../.../../../urlConfig";
const Privacy = [
  { value: 1, label: "public" },
  {
    value: 0,
    label: "private",
  },
];

const categories = [
  { value: 1, label: "Fitness" },
  { value: 2, label: "Yoga" },
  { value: 3, label: "Meditation" },
  { value: 4, label: "Skills" },
  { value: 5, label: "Sports" },
];
const VideoUpload = () => {
  const [playlist, setPlaylist] = useState([]);
  const [play, setPlay] = useState("");
  const [privacy, setPrivacy] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [step, setStep] = useState();
  const [category, setCategory] = useState("Fitness");
  const [FilePath, setFilePath] = useState("")
    const [Duration, setDuration] = useState("")
    const [Thumbnail, setThumbnail] = useState("")

  useEffect(() => {
    axios.get("/play-list").then((response) => {
      if (response.data.success) {
        console.log(response.data.playlist);

        setPlaylist(response.data.playlist);
      } else {
        alert("play list not feched");
      }
    });
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const handlePrivacyChange = (e) => {
    setPrivacy(e.currentTarget.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.currentTarget.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.currentTarget.value);
  };
  const handlePlayListChange = (e) => {
    setPlay(e.currentTarget.value);
  };
  const handleStepChange = (e) => {
    setStep(e.currentTarget.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (title === "" || FilePath === "" ||
        Duration === "" ) {
        return alert('Please first fill all the fields')
    }

    const variables = {
        playlist: play._id,
        title: title,
        description: description,
        privacy: privacy,
        filePath: FilePath,
        category: category,
        duration: Duration,
      thumbnail: Thumbnail,
        step:step
    }
    try {
      const response = await axios.post('/save-video', variables)
 
      if (response.data.success) {
        alert('video Uploaded Successfully')
        // props.history.push('/')
      }
    }
    catch (err) {
      alert('Failed to upload video')    
    }

         
    
  }
  const onDrop = (files) => {

    let formData = new FormData();
    const config = {
        header: { 'content-type': 'multipart/form-data' }
    }
    console.log(files)
    formData.append("file", files[0])




    axios.post('/upload-video', formData, config)
        .then(response => {
            if (response.data.success) {

                let variable = {
                    filePath: response.data.filePath,
                    fileName: response.data.fileName
                }
                setFilePath(response.data.filePath)

                //gerenate thumbnail with this filepath ! 

                axios.post('/thumbnail', variable)
                    .then(response => {
                        if (response.data.success) {
                            setDuration(response.data.fileDuration)
                          setThumbnail(response.data.thumbsFilePath)
                          console.log(response.data.fileDuration)
                          console.log(response.data.thumbsFilePath)

                        } else {
                            alert('Failed to make the thumbnails');
                        }
                    })


            } else {
                alert('failed to save the video in server')
            }
        })

}

  return (
    <div className="container-fluid ">
      <div className="upload-header mt-3">
        <h2 className="text-primary ml-5 "> Upload video</h2>
        <Link to="/play-list" className=" play-list">
          {" "}
          New Playlist
        </Link>
      </div>

      <form onSubmit ={handleSubmit}>
        <div className=" mx-4 mt-5 row title mb-3">
          <div className="col-lg-5">
            <div className="form-group">
              <label className=" ml-5 text-success">Title</label>
              <input
                className="form-control"
                placeholder="Enter video title"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="form-group">
              <label className=" ml-5 text-success">Category</label>
              <select class="form-control" onChange={handleCategoryChange}>
                {categories.map((item, index) => (
                  <option key={item.index} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className=" ml-5 text-success">Privacy</label>
              <select class="form-control" onChange={handlePrivacyChange}>
                {Privacy.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className=" ml-5 text-success">Play List</label>
              <select className="form-control" onChange={handlePlayListChange}>
                {playlist.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.title && item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label f className=" ml-5 text-success">
                Step
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter video step"
                value={step}
                onChange={handleStepChange}
              />
            </div>
            <div className="form-group">
              <label className=" ml-5 text-success">Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="form-group">
              <label className=" ml-5 text-success">Upload Video</label>
              <Dropzone onDrop={onDrop} multiple={false}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div
                      {...getRootProps()}
                      style={{
                        width: "300px",
                        height: "240px",
                        border: "1px solid lightgray",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <input {...getInputProps()} />
                      <AiFillPlusCircle style={{ fontSize: "3rem" }} />
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
{/*           
                  {Thumbnail !== "" &&
                        <div>
                            <img src={`http://localhost:8081/${Thumbnail}`} alt="haha" />
                        </div>
                    } */}
                
          </div>
        </div>
        <button className=" btnSubmit float-right mr-5 btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default VideoUpload;
