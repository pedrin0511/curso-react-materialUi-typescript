import { createBrowserRouter } from "react-router-dom"

export  const router = createBrowserRouter([
  {
    path: "/",
    element: "<div>Hello world!</div>",
  },
  {
    path: "*",
    element: "<div>Rota2!</div>",
  },
]);;
