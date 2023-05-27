import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Método não permitido' });
  }
  const cookiesExist = req.cookies.get("loginID");
  if(!cookiesExist){
    return NextResponse.json({message: "NotExist"})
  }
  else{
    return NextResponse.json({message: "cookieExist"})
  }

}