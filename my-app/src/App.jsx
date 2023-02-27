import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './component/Regster'
import Login from './component/Login'
import Menu from './component/Menu'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    
  },
{
   path: '/regster',
    element : <SignUp />
  },{
    path: '/login',
    element: <Login />
  }
]);

function App() {
  
  return (
    <>
 <RouterProvider router={router} />
   
    </>
     )
}

export default App
