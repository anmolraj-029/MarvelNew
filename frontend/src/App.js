import { createBrowserRouter } from "react-router-dom";
import HomePage , { loader as marvelLoader } from "./pages/HomePage";
import ErrorPage from "./components/ErrorPage";
import MarvelDetails , { loader as marvelItemLoader} from "./pages/MarvelDetails";
import RootLayout from "./pages/RootLayout";
import NewMarvel , { action as marvelAction} from "./pages/NewMarvel";
import { RouterProvider } from "react-router-dom";

function App(){
  const router = createBrowserRouter([{
    path:"/",
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[{
      index:true,
      path:"",
      element:<HomePage/>,
      loader:marvelLoader,
    },
    {
      path:":marvelId",
      element:<MarvelDetails/>,
      loader:marvelItemLoader
    },
    {
      path:"new",
      element:<NewMarvel/>,
      action:marvelAction,
    }
  ],

  }]);
  return (
    <RouterProvider router = {router}/>
  )
}

export default App;