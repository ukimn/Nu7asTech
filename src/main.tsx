import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/Context.tsx";
import Projects from "./Projects.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./elementError/Error.tsx";

const root = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>
  },
  {
    path: "/projects",
    element: <Projects/>
  }
])

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <RouterProvider router={root}/>
  </ThemeProvider>
);
