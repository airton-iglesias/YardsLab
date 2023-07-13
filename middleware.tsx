import {NextRequest, NextResponse} from "next/server";


export function middleware(req: NextRequest){
    if(req.nextUrl.pathname.length > 1){
        return NextResponse.rewrite(new URL('/comingsoon', req.url))
    }
    else{
        return NextResponse.next();
    }
}

