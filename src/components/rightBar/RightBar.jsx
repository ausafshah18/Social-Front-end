import "./rightBar.scss"

const rightBar = ()=> {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">

          <span>Suggestions for you</span>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Garv Jaiswal</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span> Asim </span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          
        </div>

        <div className="item">
          <span>Latest Activities</span>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              
              <p>
                <span>David</span> changed their cover picture
              </p>

            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>

            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              
              <p>
                <span>Ayush Bharti</span> changed their cover picture
              </p>

            </div>
            <span>1 min ago</span>
          </div>

        </div>

        <div className="item">
          <span>Online Friends</span>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              
              <div className="online"/>
                <span>Jane Doe</span>

            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              
              <div className="online"/>
                <span>Vishal Sinha</span>
                
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              
              <div className="online"/>
                <span>Franklin</span>
                
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              
              <div className="online"/>
                <span>Trevor Phillips</span>
                
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              
              <div className="online"/>
                <span>Mr Brown</span>
                
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default rightBar;
