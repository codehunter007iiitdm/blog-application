import "./singlePost.css"

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.unsplash.com/photo-1517594632980-535c0c33173d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
        alt="" 
        className="singlePostImg" 
        />
        <h1 className="singlePostTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className="singlePostEdit">
        <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i class="singlePostIcon fa-solid fa-trash"></i>
        </div>
        <div className="singlePostInfo">
        <span className="singlePostAuthor">
        Author: <b>Teja</b> 
        </span>
        <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Quia itaque dolor recusandae vel alias iure? At aliquid 
           deleniti itaque odit nemo tenetur voluptate doloremque, 
           natus quas repudiandae delectus veritatis corrupti.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Quia itaque dolor recusandae vel alias iure? At aliquid 
           deleniti itaque odit nemo tenetur voluptate doloremque, 
           natus quas repudiandae delectus veritatis corrupti.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Quia itaque dolor recusandae vel alias iure? At aliquid 
           deleniti itaque odit nemo tenetur voluptate doloremque, 
           natus quas repudiandae delectus veritatis corrupti.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Quia itaque dolor recusandae vel alias iure? At aliquid 
           deleniti itaque odit nemo tenetur voluptate doloremque, 
           natus quas repudiandae delectus veritatis corrupti.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Quia itaque dolor recusandae vel alias iure? At aliquid 
           deleniti itaque odit nemo tenetur voluptate doloremque, 
           natus quas repudiandae delectus veritatis corrupti.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Quia itaque dolor recusandae vel alias iure? At aliquid 
           deleniti itaque odit nemo tenetur voluptate doloremque, 
           natus quas repudiandae delectus veritatis corrupti.
         </p>
      </div>
    </div>
  )
}

export default SinglePost
