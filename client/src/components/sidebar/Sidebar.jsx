import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img src="https://images.unsplash.com/photo-1522648485144-849409408aee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF1dGhvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores animi maxime harum, 
      voluptates minus reprehenderit perferendis perspiciatis eveniet magnam! Suscipit ullam 
      ab eaque. Aspernatur tenetur modi perferendis sit, cum pariatur!</p>
      </div>
      <div className="sidebarItem">
      
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className='sidebarList'>
      <li className="sidebarListItem">Life</li>
      <li className="sidebarListItem">Music</li>
      <li className="sidebarListItem">Style</li>
      <li className="sidebarListItem">Sport</li>
      <li className="sidebarListItem">Cinema</li>
      <li className="sidebarListItem">Tech</li>
      
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
      <i className="sidebarIcon fa-brands fa-square-facebook"></i>
      <i className="sidebarIcon fa-brands fa-square-twitter"></i>
      <i className="sidebarIcon fa-brands fa-square-instagram"></i>
      <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
      
      </div>
      </div>
    </div>
  )
}

export default Sidebar
