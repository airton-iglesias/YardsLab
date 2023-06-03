import { prisma } from "../../../../../lib/prisma";
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Método não permitido' });
  }
  const body = await req.json();

  try{
    const queryCreate = await prisma.users.create({
      data: {
        email: body.email,
        name: body.nome,
        password: body.password,
        isPremium: 'USER',
        yardPass_Account: 'FALSE'
      },
    });

    const query = await prisma.users.findUnique({
      where: {
        email: body.email
      }
  });

    if (query !== null){
      if (body.email === query.email){
        return NextResponse.json({message: "sucess"});
      }

      else{
        return NextResponse.json({message: "InternalError"})
      }
    }
    else{
      return NextResponse.json({message: "InternalError"})
    }
  }
  catch(err){
    return NextResponse.json({err});
  }
  
}