import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Screens/Root";
import Home from "./Screens/Home";
import Auth from "./Screens/Auth";
import CreateNote from "./Screens/CreateNote";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "create-note", element: <CreateNote /> },
      { path: "/auth", element: <Auth /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
