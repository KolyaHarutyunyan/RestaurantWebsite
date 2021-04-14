nameIE = "@eachbase"

types = [
    "fragments",
    "contexts",
    "components",
    "theme",
]

context = "import { createContext } from 'react'\n\n" \
          "const Context = createContext()\n\n" \
          "export const ContextProvider = ( {children} ) => \n\t " \
          "<Context.Provider value={{}}>   \n\t\t" \
          "{children}  \n\t" \
          "</Context.Provider>"


