import { prisma } from "../../../../../../../lib/prisma";
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Método não permitido' });
  }
  const body = await req.json();
  const userID = req.cookies.get("loginID").value;

  try{
    const query = await prisma.yardPassPasswords.createMany({
      data: {
          user_Id: parseInt(userID),
          website: body.website,
          username: body.login,
          password: body.password
      },
  });

    return NextResponse.json({message: "sucess"});
  }
  catch(err){
    return NextResponse.json({err});
  }
  
}