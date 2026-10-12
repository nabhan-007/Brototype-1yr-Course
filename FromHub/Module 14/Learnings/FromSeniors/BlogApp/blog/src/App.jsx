import { BrowserRouter,Routes,Route } from "react-router-dom"

import LoginPage from "./pages/LoginPage"
import BlogList from "./pages/blogList"
import BlogManagment from "./pages/blogManagment"
import ProtectedRoute from "./context/protectedRoute"

function App(){
  
  return(
   <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/blogList" element={<ProtectedRoute><BlogList/></ProtectedRoute>}/>
      <Route path="/blogManagment" element={<ProtectedRoute><BlogManagment/></ProtectedRoute>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App