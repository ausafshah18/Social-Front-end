import {useState}  from "react"
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./update.scss"

function Update({setOpenUpdate, user}) {

    const [cover, setCover] = useState(null)
    const [profile, setProfile] = useState(null)
    const [texts, setTexts] = useState({
        name:"",
        city:"",
        website:"",
    });


    const upload = async (file) => {
        try {
    
          const formData = new FormData(); 
          formData.append("file", file)
          const res = await makeRequest.post("/upload", formData); 
          return res.data; 
    
        } catch (err) {
          console.log(err)
          
        }
    }
    

    const handleChange = (e) => {
        setTexts((prev) => ({...prev, [e.target.name] : [e.target.value] }))
    };

    const queryClient = new useQueryClient()
  
    const mutation = useMutation((user) =>{ 
      return makeRequest.put("/users", user) 
    },{
      onSuccess: () => { // on success it will refetch
        // Invalidate and refetch
        queryClient.invalidateQueries(["user"]) 
      },
    });

    const handleClick = async (e) =>{
        e.preventDefault();
        let coverUrl;
        let profileUrl;
        
        coverUrl = cover ? await upload(cover) : user.coverPic
        profileUrl = profile ? await upload(profile) : user.ProfilePic

        mutation.mutate({...texts, coverPic:coverUrl ,profilePic:profileUrl})
    
        // to clear 
        setOpenUpdate(false);
    };
    

  return (
    <div className="update">
        Update
        <form action="">
            <input type="file" onChange={e => setCover(e.target.files[0])}/>
            <input type="file" onChange={e => setProfile(e.target.files[0])}/>
            <input type="text" placeholder="name" name="name" onChange={handleChange}/>
            <input type="text" placeholder="city" name="city" onChange={handleChange}/>
            <input type="text" placeholder="website"name="website" onChange={handleChange}/>
            <button onClick={handleClick}>Update</button>
        </form>
        <button onClick={() => setOpenUpdate(false)}>X</button>
    </div>
  )
}

export default Update