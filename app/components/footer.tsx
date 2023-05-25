import Link from "next/link";
import React from "react";

export default function footer(){
    return(
        <>
            <footer>
                <div className="mx-auto max-w-screen-lg px-3 py-6">
                    <div className="border-t border-gray-600 pt-5">
                        <div className="text-sm text-gray-200 text-center">© Copyright 2023. Todos os direitos reservados para
                            <Link className="text-cyan-400 hover:underline" href="./sobre"> Airton Iglesias</Link>!
                        </div>
                    </div>
                </div>
            </footer>   
        </>
    )
}