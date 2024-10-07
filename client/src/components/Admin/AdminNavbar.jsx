import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ManageCompanies from './ManageCompanies';
import AdminDashBoard from './AdminDashBoard';
import ManageStudents from './ManageStudents';
export default AdminNavbar = () => {
  return (
    <>
        <ul>
            <li>
                <Link to='./home'>Home</Link>
            </li>
            <li>
                <Link to='./companies'>Companies</Link>
            </li>
            <li>
                <Link to='./students'>Students</Link>
            </li>
        </ul>
        <Router>
            <Routes>
                <Route path='./home' element={AdminDashBoard}></Route>
                <Route path='/companies' element={ManageCompanies}></Route>
                <Route path='/students' element={ManageCompanies}> </Route>
            </Routes>
        </Router>
    </>

  )
}
