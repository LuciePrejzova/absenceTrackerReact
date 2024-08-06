import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SubstitutePage from "./pages/SubstitutePage";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter(
  // createRoutesFromElements(<Route index element={<h1>My app</h1>}/>)
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/substitutes' element={<SubstitutePage/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
  // return (

  //   // <div className="bg-beige text-darkGreen">
  //   //   <Navbar/>
  //   //   <Header/>
  //   //   <AttendanceList/>
  //   //   <div
  //   //   style={{
  //   //     // backgroundImage: 'url(\'src/assets/images/bg.webp\')',
  //   //     // backgroundSize: 'cover',
  //   //     // backgroundPosition: 'center',
  //   //     // width: '100%',
  //   //     // height: '92vh', // Adjust height as needed
  //   //   }}
  //   // ></div>
  //   // </div>
  // )
};

export default App;
