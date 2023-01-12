import "./comments.scss";
import { useContext } from "react";
import {AuthContext} from "../../context/authContext"
import { useQuery, useMutation,useQueryClient } from '@tanstack/react-query'
import { makeRequest } from "../../axios.js"
import {useState} from "react";
import moment from "moment"

const Comments = ({postId}) => {
  const [desc, setDesc] = useState("")
  const {currentUser} = useContext(AuthContext)
     
     
  const { isLoading, error, data } = useQuery(["comments"], () =>  // React-Query
  makeRequest.get("/comments?postId="+postId).then((res) => { // makeRequest is in axios file through which we are connected to backend. We are sending postId
    return res.data; // we get data from DB, basically comments
  })
  );


  const queryClient = new useQueryClient()

  const mutation = useMutation((newComment) =>{ // newPost here is our comment
    return makeRequest.post("/comments", newComment) // makeRequest is from axios(used for api calls). 
  },{
    onSuccess: () => { // on success it will refetch
      // Invalidate and refetch
      queryClient.invalidateQueries(["comments"]) // in Posts.jsx we can see our Query name is "posts" that is why we used it for refetching
    },
  });

  const handleClick = async (e) =>{
    e.preventDefault();
    
    mutation.mutate({desc, postId})

    setDesc("")
  }
  

  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" /> 
            <input type="text" placeholder="Write a comment"
              value={desc} // react hook variable
             onChange={(e) => setDesc(e.target.value)}/>
            <button onClick={handleClick}>Send</button>
        </div>
        {isLoading 
          ? "loading"
          :data.map(comment=>(
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">{moment(comment.createdAt).fromNow()}</span>
            </div>
        ))
    }</div>
  )
}

export default Comments;
