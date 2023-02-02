import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../Component/DashBoard'
import Upload from '../Component/Upload'
import View from '../Component/View'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path={"/"} element={<DashBoard />} />
        <Route path={"/upload"} element={<Upload />} />
        <Route path={"/view"} element={<View />}/>
    </Routes>
  )
}
