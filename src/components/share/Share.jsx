import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation,useQueryClient } from '@tanstack/react-query'
import { makeRequest } from "../../axios";

const Share = () => {

  const [file, setFile] = useState(null)
  const [desc, setDesc] = useState("")

  const upload = async () => {
    try {

      const formData = new FormData(); // we have to create formdata because we can't directly send the file to API 
      formData.append("file", file)
      const res = await makeRequest.post("/upload", formData); // if everything goes well it will return us a URL
      return res.data; // we will also return this URL

    } catch (err) {
      console.log(err)
      
    }
  }

  const {currentUser} = useContext(AuthContext)

  const queryClient = new useQueryClient()


  // We add, updtae and delete data using mutation
  const mutation = useMutation((newPost) =>{ // newPost here is our file and desc
    return makeRequest.post("/posts", newPost) // makeRequest is from axios(used for api calls). We share posts using Share.jsx
  },{
    onSuccess: () => { // on success it will refetch
      // Invalidate and refetch
      queryClient.invalidateQueries(["posts"]) // in Posts.jsx we can see our Query name is "posts" that is why we used it for refetching
    },
  });

  const handleClick = async (e) =>{
    e.preventDefault();
    let imgUrl = "";
    if(file)
    {
      imgUrl = await upload() // if we have a file we will get its URL then we pass it to mutate to share file with description
    }
    mutation.mutate({desc, img:imgUrl})

    // to clear desc and img after sharing
    setDesc("")
    setFile(null)
  }

  return (
    <div className="share">
      <div className="container">
        <div className="top">

          <div className="left">
            <img
              src={"/upload/" + currentUser.profilePic}
              alt=""
            />
            <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} onChange={e => setDesc(e.target.value)} value={desc}/>
          </div>

          <div className="right">
            {file && <img className="file" alt="" src={URL.createObjectURL(file)}/>} {/* It displays small pic of file to be shared once selected. Basically a fake URL */}
          </div>
          
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} onChange={e => setFile(e.target.files[0])}/>
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            
            <button onClick={handleClick}>Share</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;