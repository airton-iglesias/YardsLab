"use client";

import { createContext, useEffect, useState } from 'react';

interface IUserContext {
    isLogged: boolean;
    yardPassAccountExist: boolean,
    setIsLoggedTrue: Function;
    setIsLoggedFalse: Function;
  }

export const GlobalContext = createContext<IUserContext>({isLogged: false, yardPassAccountExist: false, setIsLoggedTrue: Function, setIsLoggedFalse: Function});


export default function GlobalProvider({children}){
    const [isLogged, setIsLogged] = useState(false);
    const [yardPassAccountExist, setYardPassAccountExist] = useState(false);

    useEffect(() => {
        if (isLogged === false){
            const reqData = async () =>  {
                const queryLoginCookie = await fetch('/api/controllers/cookies/cookieLoginExist', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })


                const dataLoginCookie = await queryLoginCookie.json();

                if(dataLoginCookie.message == "cookieExist"){
                    setIsLogged(true)
                }
                else if(dataLoginCookie.message == "NotExist"){
                    setIsLogged(false) 
                }

                const queryYardpassCookie = await fetch('/api/controllers/cookies/cookieYardPassExist', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                const dataYardpassCookie = await queryYardpassCookie.json();

                if(dataYardpassCookie.message == "TRUE"){
                    setYardPassAccountExist(true)
                }
                else if(dataYardpassCookie.message == "FALSE"){
                    setYardPassAccountExist(false) 
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
        <GlobalContext.Provider value={{isLogged, yardPassAccountExist, setIsLoggedTrue, setIsLoggedFalse}}>
            {children}
        </GlobalContext.Provider>
    )
}