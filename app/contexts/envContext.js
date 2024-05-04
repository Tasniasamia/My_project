import { createContext, useContext } from "react"
const EnvContext = createContext({})

export const useEnv = () => useContext(EnvContext)

export default EnvContext