"use client";

import { createContext, useEffect, useState } from 'react';

interface IUserContext {
    isLogged: boolean;
    yardPassAccountExist: boolean,
    setIsLoggedTrue: Function;
    setIsLoggedFalse: Function;
    passwordsData: any;
    cardBankData: any;
  }

export const GlobalContext = createContext<IUserContext>({isLogged: false,cardBankData: JSON, yardPassAccountExist: false, setIsLoggedTrue: Function, setIsLoggedFalse: Function, passwordsData: JSON});


export default function GlobalProvider({children}){
    const [isLogged, setIsLogged] = useState(false);
    const [yardPassAccountExist, setYardPassAccountExist] = useState(false);
    const [passwordsData, setPasswordsData] = useState([]);
    const [cardBankData, setCardBankData] = useState([])

    useEffect(() => {
        if (!isLogged) {
          const reqData = async () => {
            try {
              const queryLoginCookie = await fetch('/api/controllers/cookies/cookieLoginExist', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
      
              const dataLoginCookie = await queryLoginCookie.json();
      
              if (dataLoginCookie.message === 'cookieExist') {
                setIsLogged(true);
              } else if (dataLoginCookie.message === 'NotExist') {
                setIsLogged(false);
              }
      
              const queryYardpassCookie = await fetch('/api/controllers/cookies/cookieYardPassExist', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
      
              const dataYardpassCookie = await queryYardpassCookie.json();
      
              if (dataYardpassCookie.message === 'TRUE') {
                setYardPassAccountExist(true);
              } else if (dataYardpassCookie.message === 'FALSE') {
                setYardPassAccountExist(false);
              }
            } catch (error) {
              console.error('Erro na requisição:', error);
            }
          };
      
          reqData();
        }
    }, [isLogged]);
      
    useEffect(() => {
      if (yardPassAccountExist) {
        const reqYardPassPasswords = async () => {
          try {
            const response = await fetch('/api/controllers/services/yardpass/passwords', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                parameter: 'getPasswords',
              }),
            });
    
            if (response.ok) {
              const yardPassPasswordsData = await response.json();

              setPasswordsData(yardPassPasswordsData[0].YardPassPasswords);
              setCardBankData(yardPassPasswordsData[0].YardPassPayments);

            } else {
              console.error('Erro na requisição:', response.status, response.statusText);
            }
          } catch (error) {
            console.error('Erro na requisição:', error);
          }
        };
    
        reqYardPassPasswords();
      }
    }, [yardPassAccountExist]);
    
      
    const setIsLoggedTrue = () => {
        setIsLogged(true);
      };
    
      const setIsLoggedFalse = () => {
        setIsLogged(false);
      };

    return(
        <GlobalContext.Provider value={{isLogged, yardPassAccountExist, setIsLoggedTrue, setIsLoggedFalse, passwordsData, cardBankData}}>
            {children}
        </GlobalContext.Provider>
    )
}