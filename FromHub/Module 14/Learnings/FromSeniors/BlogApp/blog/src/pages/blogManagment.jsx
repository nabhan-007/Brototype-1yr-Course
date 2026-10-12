import { useContext, useEffect, useState } from "react"
import "./blogManangment.css"
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc,query,where } from "firebase/firestore"
import { db,auth } from "../firebase/firebase"
import { AuthContext } from "../context/authContext"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"


function BlogManagment(){

    const {user}=useContext(AuthContext)
    const [blogs,setBlogs]=useState([])
    const [newBlog,setNewBlog]=useState({title:"",content:""})
    const [newError,setNewError]=useState("")
    const [editId,setEditId]=useState("")
    const [addModal,setAddModal]=useState(false)
    const [deleteId,setDeleteId]=useState("")

    const navigate=useNavigate()

   useEffect(() => {

    async function fetchBlogs() {

        if(!user) return

        const thisUser = query(
            collection(db, "Blogs"),
            where("userId", "==", user.uid)
        )
        const dbs = await getDocs(thisUser)

      const data=dbs.docs.map((doc)=>({ id:doc.id,...doc.data() }))

        setBlogs(data)
        console.log(data)
    }

    fetchBlogs()

}, [user])

function setContent(x){
    setNewBlog(t=>({...t,content:x}))
}

function setTitle(x){
    setNewBlog(t=>({...t,title:x}))
}

async function addBlog(e){
    e.preventDefault()
    const existing=blogs.find((x)=>x.title==newBlog.title)
    if(newBlog.title.trim()==""){
        return setNewError("Title Required")
    }
     if(newBlog.content.trim()==""){
        return setNewError("content Required")
    }
       if (!/^[a-zA-Z ]+$/.test(newBlog.title)) {
        return setNewError("Title must contain only alphabets")
    }
    if (!/^[a-zA-Z ]+$/.test(newBlog.content)) {
        return setNewError("Content must contain only alphabets")
    }
    if(existing){
        return setNewError("Blog Allready exists ")
    }
     if(newBlog.title.trim().length<4){
         return setNewError("Title Must be 4 letters")
    }
    if(newBlog.content.trim().length<12){
         return setNewError("Content Must be 12 letters")
    }

    try{
    const newDoc=await addDoc(collection(db,"Blogs"),{
    title:newBlog.title,
    content:newBlog.content,
    userId: user.uid,
    username: user.email
 })

 setAddModal(false)

            setBlogs((prev) => [
            ...prev,
            {
                id: newDoc.id,
                title: newBlog.title.trim(),
                content: newBlog.content.trim(),
            }
        ]);
    }catch(err){
        console.log(err)
    }
}



async function editBlog(e){
    e.preventDefault()
      const existing=blogs.find((x)=>x.title==newBlog.title && x.id!==editId)

    if(newBlog.title.trim()==""){
        return setNewError("Title Required")
    }
     if(newBlog.content.trim()==""){
        return setNewError("content Required")
    }
      if (!/^[a-zA-Z ]+$/.test(newBlog.title)) {
        return setNewError("Title must contain only alphabets");
    }
    if (!/^[a-zA-Z ]+$/.test(newBlog.content)) {
        return setNewError("Content must contain only alphabets");
    }
    if(existing){
        return setNewError("Blog Allready exists ")
    }
     if(newBlog.title.trim().length<4){
         return setNewError("Title Must be 4 letters")
    }
    if(newBlog.content.trim().length<22){
         return setNewError("Content Must be 22 letters")
    }

    try{
     await updateDoc(doc(db,"Blogs",editId),{
       title:newBlog.title,
       content:newBlog.content
    })
    setEditId("")

     setBlogs((prev) => prev.map((blog) =>
                blog.id === editId? {
                        ...blog,
                        title: newBlog.title,
                        content: newBlog.content
                    }: blog))
    }
    catch(err){
        console.log(err)
    }
}



async function deleteBlog(){
    try{
    await deleteDoc(doc(db,"Blogs",deleteId))

    setBlogs((prev) =>
            prev.filter((blog) => blog.id !== deleteId)
        );

        setDeleteId("")

    }
    catch(err){
        console.log(err)
    }
}

async function logoutHandler(){
    try{
        await signOut(auth)
        navigate("/login")
        localStorage.removeItem("email")
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
                <h1>My Blogs</h1>
                <p>Manage your blog posts</p>
            </div>

            <button className="add-blog-btn" onClick={()=>{setAddModal(true); setNewError(""); setNewBlog({title:"",content:""})}}>
                + Add Blog
            </button>

        </div>

       

            {/* Add Blog Modal */}

            {addModal && (

                <div className="modal-overlay">

                    <div className="add-blog-modal">

                        <h2>Add New Blog</h2>

                        <form onSubmit={addBlog}>

                        {newError&&<p className="errorField">{newError}</p>}

                            <input
                                type="text"
                                placeholder="Enter blog title"
                                className="input1"
                                onChange={e=>setTitle(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Enter blog content"
                                className="input2"
                                onChange={e=>setContent(e.target.value)}
                            />


                            <div className="modal-actions">

                                <button
                                type="button"
                                    className="cancel-btn"
                                     onClick={()=>setAddModal(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="save-btn"
                                >
                                    Add Blog
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}


 {/* Edit Blog Modal */}

            {editId!=="" && (

                <div className="modal-overlay">

                    <div className="add-blog-modal">

                        <h2>Edit Blog</h2>

                        <form onSubmit={editBlog}>

                        {newError&&<p className="errorField">{newError}</p>}

                            <input
                                type="text"
                                placeholder="Enter blog title"
                                className="input1"
                                onChange={e=>setTitle(e.target.value)}
                                value={newBlog.title}
                            />

                            <input
                                type="text"
                                placeholder="Enter blog content"
                                className="input2"
                                onChange={e=>setContent(e.target.value)}
                                value={newBlog.content}
                            />


                            <div className="modal-actions">

                                <button
                                    className="cancel-btn"
                                    type="button"
                                     onClick={() => {setEditId("");setNewError("");setNewBlog({title:"", content:""});}}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="save-btn"
                                >
                                    Save
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}



 {/* Delete Modal */}

            {deleteId && (
    <div className="modal-overlay">
        <div className="delete-modal">

            <h2>Delete Blog?</h2>

            <p>
                Are you sure you want to delete this blog?
            </p>

            <div className="modal-actions">

                <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setDeleteId(null)}
                >
                    Cancel
                </button>

                <button
                    type="button"
                    className="confirm-delete-btn"
                    onClick={deleteBlog}
                >
                    Delete
                </button>

            </div>

        </div>
    </div>
)}


{/* --------------------------------- */}


        {/* Blog Cards */}

        <div className="blogs-container">
          
        
         {blogs.map((b)=>(
            <div className="blog-card" key={b.id}>

                <div className="blog-card-content">

                    <h2>{b.title}</h2>

                    <p className="blog-content">
                        {b.content}
                    </p>

                </div>

                <div className="blog-card-buttons">

                    <button className="edit-btn" onClick={()=>{setEditId(b.id); setNewError("");setNewBlog({title:b.title,content:b.content})}}>
                        Edit
                    </button>

                    <button className="delete-btn" onClick={()=>setDeleteId(b.id)}>
                        Delete
                    </button>

                </div>

            </div>
))}

                </div>

            </div>


        </div>

    )
}


export default BlogManagment