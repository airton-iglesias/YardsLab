import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest){
    const sessionCookie = req.cookies.get('session')
    req.cookies.set('new_cookie', 'my_new_cookie')
    if(req.nextUrl.pathname.includes('/dashboard')){
        if(!sessionCookie){
           
            return NextResponse.next();
        }
        else{
            return NextResponse.next();
        }
    }
}

