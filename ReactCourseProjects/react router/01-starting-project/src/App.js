import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  BrowserRouter,
  Routes
} from "react-router-dom";
import AbouPage from "./pages/AbouPage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import LayoutPage from "./pages/LayoutPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductpage from "./pages/SingleProductpage";

function App() {
  // const Routers=createRoutesFromElements(
  //      <Route>
  //       <Route path="/" element={<LayoutPage/>}>

  //        <Route path="/" element={<Home/>}/>
  //        <Route path="about" element={<AbouPage/>}/>
  //        <Route path="*" element={<ErrorPage/>}/>
  //       </Route>
  //      </Route>
  // )

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPage />,
      errorElement:<ErrorPage/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <AbouPage /> },
      ],
    },
  ]);

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage/>}>
           <Route index element={<Home/>}/>
           <Route path="about" element={<AbouPage/>}/>
           <Route path="products" element={<ProductsPage/>} />
           <Route path="products/:id" element={<SingleProductpage/>}/>
           <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
  )
}

export default App;
