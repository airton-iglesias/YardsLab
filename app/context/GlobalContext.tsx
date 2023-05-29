"use client";

import { createContext, useEffect, useState } from 'react';

interface IUserContext {
    isLogged: boolean;
    setIsLoggedTrue: any;
    setIsLoggedFalse: any;
  }

export const GlobalContext = createContext<IUserContext|{}>({});


export default function GlobalProvider({children}){
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if (isLogged === false){
            const reqData = async () =>  {

                const req = await fetch('/api/controllers/cookies/cookieExist', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
    
                const data = await req.json();
    
                if(data.message == "cookieExist"){
                    setIsLogged(true)
                }
                else if(data.message == "NotExist"){
                    setIsLogged(false) 
                }
            }
                
            reqData()
        }

    }, []);

    const setIsLoggedTrue = () => {
        setIsLogged(true);
      };
    
      const setIsLoggedFalse = () => {
        setIsLogged(false);
      };

    return(
        <GlobalContext.Provider value={{isLogged, setIsLoggedTrue, setIsLoggedFalse}}>
            {children}
        </GlobalContext.Provider>
    )
}