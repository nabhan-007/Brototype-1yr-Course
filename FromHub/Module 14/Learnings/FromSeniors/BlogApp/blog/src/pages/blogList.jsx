import { useContext, useEffect,useState } from "react"
import "./blogList.css"
import { collection,getDocs } from "firebase/firestore"
import { db, auth } from "../firebase/firebase"
import { AuthContext } from "../context/authContext"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"

function BlogList(){

    const {user}=useContext(AuthContext)
    const [blogs, setBlogs] = useState([])

    const navigate=useNavigate()

   useEffect(() => {

    async function fetchBlogs() {

        const dbs = await getDocs(collection(db, "Blogs"))

      const data=dbs.docs.map((doc)=>({ id:doc.id,...doc.data() }))

        setBlogs(data)
    }

    fetchBlogs()

}, [])


async function logoutHandler(){
    try{
        await signOut(auth)
        navigate("/login")
    }catch(err){
        console.log(err)
    }
}

    return(
  <div className="my-blogs-page">

    {/* Navbar */}

    <nav className="navbar">

        <div className="nav-left">

            <button className="nav-link" onClick={()=>navigate("/blogList")}>
                Explore
            </button>

            <button className="nav-link" onClick={(()=>navigate("/blogManagment"))}>
                My Blogs
            </button>

        </div>


        <div className="nav-right">

            <button className="logout-btn" onClick={logoutHandler}>
                Logout
            </button>

        </div>

    </nav>


    {/* My Blogs Content */}

    <div className="my-blogs-content">

        <div className="my-blogs-header">

            <div>
                <h1>Explore Blogs</h1>
                <p>Discover stories and ideas.</p>
            </div>

        </div>

    

        {/* Blog Cards */}

        <div className="blogs-container">
          
        
         {blogs.map((b)=>(
            <div className="blog-card" key={b.id}>

             <div className="blog-card-content">
             <h2>{b.title}</h2>

            <p className="blog-content">
             {b.content}
           </p>

           <p className="blog-username">
            By {b.username}
          </p>

          </div>

            </div>
))}

                </div>

            </div>

        </div>

    )
}
export default BlogList