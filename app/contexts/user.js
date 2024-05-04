import { createContext, useContext } from "react";

const UserContext = createContext(undefined)
export const useUser = () => useContext(UserContext)
export default UserContext

