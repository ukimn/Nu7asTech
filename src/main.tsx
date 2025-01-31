import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Projects from "./Projects.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./elementError/Error.tsx";
import { store } from './Store/store.ts'
import { Provider } from 'react-redux';


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
  <Provider store={store}>
    <RouterProvider router={root}></RouterProvider>
  </Provider>
);
