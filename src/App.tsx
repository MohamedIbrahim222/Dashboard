import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Exames from "./routes/exames";
import Root from "./routes/root";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "exames",
        element: <Exames />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
