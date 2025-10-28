// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home from './page/Home'
// import Navbar from './page/Navbar'
// import About from './page/About'
// import Product from './page/Product'
// import Error from './page/Error'
// import Men from './page/Men'
// import Women from './page/Women'
// import Course from './page/Course'
// import Coursepage from './page/Coursepage'
// import Navbar2 from './page/Navbar2'

// function App() {
//   return (
//     < >
//       <Navbar />
//       <Navbar2/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About/>} />
//         <Route path="/Course" element={<Course/>} />
//         <Route path="/Course/:id" element={<Coursepage/>} />

//         <Route path="/Product" element={<Product/>} >
//         <Route path="men" element={<Men/>} />
//         <Route path="women" element={<Women/>} />
//         </Route>
//         <Route path="*" element={<Error/>} />
//       </Routes>
//     </>
//   )
// }

// export default App

import React from 'react'
import Nav1 from './context/Nav1'
import Buttom from './context/Buttom'

function App() {


  return (
    <div>
      <Nav1 />
      <Buttom/>
    </div>
  )
}

export default App