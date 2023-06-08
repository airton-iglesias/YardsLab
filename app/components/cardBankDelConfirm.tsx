import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function PasswordDelConfirm({setShowDelConfirmPopUp, itemID}){
    const [submitButton, setSubmitButton] = useState(true);

    console.log(itemID)

    const delPassword = async (e) =>{
        e.preventDefault();
        setSubmitButton(false);
        try{
            const res = await fetch('/api/controllers/services/yardpass/passwords', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    itemID: itemID,
                    parameter: "deletePassword",
                })
            });
            
            const data = await res.json();

            if (data.message == "sucess"){
                window.location.reload();
                setInterval(() => {setSubmitButton(true)}, 1000);
            }
            else{
                toast.error("Algo deu errado!");
            }

        }
        catch(err){
            console.log(err);
        }
    }
    
    return(
        <>
            <section className="fixed w-full h-full top-0 left-0 bg-gray-500/50 z-30">
                <div className="flex flex-col items-center mt-40 px-6 mx-auto lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-6 sm:p-8 relative">
                            <div className="flex items-center justify-center mb-6 text-xl font-semibold text-gray-900 ">
                                Você tem certeza que deseja excluir?
                            </div>
                            {submitButton? (
                                <>
                                    <button onClick={() => setShowDelConfirmPopUp(false)} className="absolute top-[-20px] mr-[4px] right-0 w-7 h-7 text-white hover:bg-slate-300 rounded-lg">
                                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                </>
                                ):(
                                <>
                                    <button onClick={() => setShowDelConfirmPopUp(false)} className="absolute top-[-20px] mr-[4px] right-0 w-7 h-7 text-white hover:bg-slate-300 rounded-lg" disabled>
                                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                </>
                            )}
                            <div className="text-center w-full">
                                {submitButton ? (
                                        <>
                                            <button onClick={delPassword} type="submit" className="w-32 mx-3 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-12">Confirmar</button>
                                            <button onClick={() => setShowDelConfirmPopUp(false)} type="submit" className="w-32 mx-3 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-12">Cancelar</button>
                                        </>    
                                    ):(
                                        <>
                                            <button onClick={delPassword} type="submit" className="w-36 mx-3 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-12" disabled>
                                                <svg aria-hidden="true" role="status" className="inline mb-[2px] h-5 w-5 mr-2 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                                </svg>
                                                <span>Excluindo...</span>
                                            </button>
                                        </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}