import {createTheme} from "@mui/material"
import { cyan, yellow } from "@mui/material/colors"

export const LightTheme = createTheme({
    palette:{
        primary:{
            main:yellow[700],
            dark:yellow[800],
            light:yellow[500],
            contrastText:'#fffff',
        },
        secondary:{
            main:cyan[500],
            dark:cyan[400],
            light:cyan[300],
            contrastText:'#fffff',
        },
        background:{
            default:"#f7f6f3",
            paper:'#fffff',
        }
    }
})