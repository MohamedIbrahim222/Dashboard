import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Exames from "./routes/exames";
import Root from "./routes/root";
import Home from "./routes/home";
import Quiz from "./routes/quiz";
import PastExams from "./routes/past-exams";
import { Login } from "./routes/login";
import Reset from "./routes/reset";

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
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: ":id/past-exams",
        element: <PastExams />,
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "reset",
        element: <Reset />
      }
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
