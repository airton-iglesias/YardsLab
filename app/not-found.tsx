import Link from "next/link";
import CheckCookies from "./components/checkCookies";

export default function NotFound() {
    return (
        <html>
            <body>
                <div className="bg-gradient-to-r from-slate-900 to-slate-700 h-screen pt-32">
                    <div className="relative text-center">
                        <h1 className="text-4xl text-white font-bold mb-8 animate-pulse">
                            Error 404! <br/>A página que você está tentando acessar não existe! 
                        </h1>
                        <Link href="/" className="hover:bg-blue-700 p-3 text-white bg-blue-600 rounded-lg">← Página Inicial</Link>
                    </div>
                    <div className="w-92 h-92 md:justify-center">
                        <img className="w-120 h-120 mx-auto" src="/images/teamwork.png" loading="lazy"/>
                    </div>
                </div>
                <CheckCookies/>
            </body>
        </html>
    );
}