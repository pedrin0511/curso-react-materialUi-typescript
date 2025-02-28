import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { ThemeProvider } from "@emotion/react";
import { Light } from "@mui/icons-material";


const App = () => {
  return (
  <ThemeProvider theme={Light}>
    <RouterProvider router={router} />
  </ThemeProvider>
)
}

export default App



