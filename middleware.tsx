import {NextRequest, NextResponse} from "next/server";


export function middleware(req: NextRequest){
    let cookieLogin = req.cookies.get("loginID")

    if(req.nextUrl.pathname.startsWith("/auth/login")){
        if(cookieLogin){
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }
        else{
            return NextResponse.next();
        }
    }

    else if(req.nextUrl.pathname.startsWith("/auth/register")){
        if(cookieLogin){
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }
        else{
            return NextResponse.next();
        }
    }

    if(req.nextUrl.pathname.startsWith("/dashboard")){
        if(!cookieLogin){
            return NextResponse.redirect(new URL('/auth/login', req.url));
        }
        else{
            return NextResponse.next();
        }
    }
    if(req.nextUrl.pathname.startsWith("/yardpass")){
        if(!cookieLogin){
            return NextResponse.redirect(new URL('/auth/login', req.url));
        }
        else{
            return NextResponse.next();
        }
    }
}

