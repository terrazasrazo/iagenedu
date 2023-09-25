import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const WorkshopContext = createContext()

export const WorkshopProvider = ({ children }) => {
    const [workshopData, setWorkshopData] = useState([])
    console.log(workshopData)

    return (
        <WorkshopContext.Provider value={{
            workshopData,
            setWorkshopData,
        }}>
            {children}
        </WorkshopContext.Provider>
    );
};

WorkshopProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
