import "./Post.css"

const Post = () => {
  return (
    <div className="post">
      <img 
      className="postImg"
      src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" 
      />

    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
        Lorem ipsum dolor
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
    
    </div>
    <p className="postDesc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Magni illo sint cum nam, accusantium aliquid 
    sapiente animi praesentium pariatur non sed 
    exercitationem consectetur doloremque voluptatem 
    sequi tenetur nesciunt aspernatur odit.
    
    </p>
    </div>
  )
}

export default Post
