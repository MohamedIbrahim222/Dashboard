import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Exames from "./routes/exames";
import Root from "./routes/root";
import Home from "./routes/home";
import Quiz from "./routes/quiz";
import PastExams from "./routes/past-exams";
import AdminHome from "./routes/admin-home";
import { Login } from "./routes/login";
import Reset from "./routes/reset";
import PublishQuiz from "./routes/publish-quiz";

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
        path: ":id/quiz",
        element: <PublishQuiz />,
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
      },
      {
        path: "admin-home",
        element: <AdminHome />
      }
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
