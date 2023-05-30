import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Método não permitido' });
  }

  const cookieYardPassExist = req.cookies.get("yardPass");

  if(!cookieYardPassExist){
    return NextResponse.json({message: "FALSE"})
  }
  else{
    return NextResponse.json({message: cookieYardPassExist.value})
  }

}
