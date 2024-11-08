import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Screens/Root";
import Home from "./Screens/Home";
import CreateNote from "./Screens/CreateNote";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "create-note", element: <CreateNote /> },
      // { path: "/login", element: <Login /> },
      // { path: "/signup", element: <Signup /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
