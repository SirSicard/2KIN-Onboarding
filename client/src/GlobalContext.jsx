import { createContext, useState } from "react";
import { PropTypes } from 'prop-types';


const GlobalContext = createContext(null);


export function GlobalProvider({children}) {
    const [cart, setCart] = useState([]);

  console.log(cart);

    return (
        <GlobalContext.Provider value={{
            cart,
            setCart

        }}
        >
            {children}
        </GlobalContext.Provider> 

    )
}

GlobalProvider.propTypes = {
    children: PropTypes.any.isRequired
};


export default GlobalContext;