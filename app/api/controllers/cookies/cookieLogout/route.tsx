import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';


export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Método não permitido' });
  }
  const cookiesExist = req.cookies.get("loginID");

  if(cookiesExist){
    req.cookies.clear()
    return NextResponse.json({message: "logoutSucessfull"})
  }
  else{
    return NextResponse.json({message: "errorLogout"})
  }

}