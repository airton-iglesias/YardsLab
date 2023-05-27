import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';


export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Método não permitido' });
  }
  const cookiesExist = req.cookies.get("loginID");

  if(cookiesExist){
    let currentDate = new Date();
    let expirationDate = new Date();
    expirationDate.setMonth(currentDate.getMonth() - 99999999);
    cookies().set({
      name: 'loginID',
      value: `0`,
      expires: expirationDate,
      httpOnly: true,
      path: '/',
      secure: true
    });

    return NextResponse.json({message: "logoutSucessfull"})
  }
  else{
    return NextResponse.json({message: "errorLogout"})
  }

}