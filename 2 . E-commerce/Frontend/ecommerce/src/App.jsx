import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './components/Registration/Registration.jsx'
import Login from './components/Login/Login.jsx'
import Admin from './components/Admin/Admin.jsx'
import Category from './components/Admin/Category.jsx'
import SubCategory from './components/Admin/SubCategory.jsx'
import ViewCategory from './components/Admin/ViewCategory.jsx'
import Product from './components/Admin/Product.jsx'
import ViewProduct from './components/Admin/ViewProduct.jsx'
import EditCategory from './components/Admin/EditCategory.jsx'
import EditProduct from './components/Admin/EditProduct.jsx'
import UserViewProduct from './components/Admin/UserViewProduct.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Admin />}></Route>
          <Route path='/Registration' element={<Registration />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/category' element={<Category />}></Route>
          <Route path='/EditCategory' element={< EditCategory />}></Route>
          <Route path='/subcategory' element={<SubCategory />}></Route>
          <Route path='/viewcategory' element={< ViewCategory />}></Route>
          <Route path='/Product' element={< Product />}></Route>
          <Route path='/EditProduct' element={< EditProduct />}></Route>
          <Route path='/ViewProduct' element={< ViewProduct />}></Route>
          <Route path='/UserViewProduct' element={< UserViewProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App