import { createContext, useEffect, useState } from 'react'
const Context = createContext()

function Provider({ children }) {
    const [url] = useState("https://front-end-next-initial-structure.vercel.app/api")
    // const [url] = useState("http://localhost:3000/api")
    
    const [lan, setLan] = useState(() => {
        const storedLanguage = typeof window !== 'undefined' ? window.localStorage.getItem('lan') : null;
        return storedLanguage ? storedLanguage : 'ru';
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('lan', lan);
        }
    }, [lan]);

    return (
        <Context.Provider value={{ lan, setLan, url }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }