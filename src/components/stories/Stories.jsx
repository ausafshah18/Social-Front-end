import "./stories.scss";
import { useContext } from "react";
import {AuthContext} from "../../context/authContext";

const Stories = () => {
    const {currentUser} = useContext(AuthContext)

    //TEMPORARY
    const stories = [
        {
          id: 1,
          name: "John Doe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 2,
          name: "Asim",
          img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
        },
        {
          id: 3,
          name: "Garv Jaiswal",
          img: "https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg",
        },
        {
          id: 4,
          name: "Umang Thakur",
          img: "https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg",
        },
      ];
    

  return (
    <div className="stories">

            <div className="story">
                <img src={"/upload/" + currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>

        {stories.map(story=>( // map each item of storues array
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories;
