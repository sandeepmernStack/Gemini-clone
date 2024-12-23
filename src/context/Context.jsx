
import { createContext, useState } from "react";
import run from "../config/Gemini";




export const Context = createContext()


const ContextProvider = ({ children }) => {

   

    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [recentChat, setRecentChat] = useState("")
    const [prevChat, setPrevChat] = useState([])
    const [data, setData] = useState("")
    const [showData, setShowData] = useState(false)

    const onSent = async (prompt) => {
        setLoading(true)
        setShowData(true)
        const response = await run(prompt)
        setLoading(false)
        setData(response)
        setInput("")
    }

    const contextValue = {
        input,
        setInput,
        recentChat,
        setRecentChat,
        loading,
        setLoading,
        prevChat,
        setPrevChat,
        data,
        setData,
        showData,
        setShowData,
        onSent
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider





