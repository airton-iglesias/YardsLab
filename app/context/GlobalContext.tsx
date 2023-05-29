"use client";

import { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext({});


export default function GlobalProvider({children}){
    const [isLogged, setIsLogged] = useState("false");

    useEffect(() => {
        if (isLogged === "false"){
            const reqData = async () =>  {

                const req = await fetch('/api/controllers/cookies/cookieExist', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
    
                const data = await req.json();
    
                if(data.message == "cookieExist"){
                    setIsLogged("true")
                }
                else if(data.message == "NotExist"){
                    setIsLogged("false") 
                }
            }
                
            reqData()
        }

    }, []);

    const contextValue = {
        isLogged, 
        setIsLogged
      };

    return(
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}