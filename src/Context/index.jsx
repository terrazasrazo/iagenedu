import PropTypes from "prop-types";
import { createContext, useState } from 'react'

export const KeywordContext = createContext()

export const KeywordProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("")

    return (
        <KeywordContext.Provider value={{
            keyword,
            setKeyword
        }}>
            {children}
        </KeywordContext.Provider>
    )
}

KeywordProvider.propTypes = {
    children: PropTypes.node.isRequired
};
