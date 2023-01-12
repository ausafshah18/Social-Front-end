import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from "../../axios.js"


const Posts = ({userId}) => {

  const { isLoading, error, data } = useQuery(["posts"], () =>  // React-Query
  makeRequest.get("/posts?userId="+userId).then((res) => { // makeRequest is in axios file through which we are connected to backend
    return res.data; // we get data from DB, basically posts
  })
  );


  
  return (
    <div className="posts">
      {error
        ? "Something went wrong"
        : isLoading 
        ? "loading" 
        : data.map(post => (  // we map through posts one by one
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}
export default Posts;
