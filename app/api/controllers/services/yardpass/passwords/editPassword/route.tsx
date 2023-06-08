import { prisma } from "../../../../../../../lib/prisma"
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Método não permitido' });
  }
  const body = await req.json();
  const itemID = body.itemID;

  try{
      const query = await prisma.yardPassPasswords.update({
        where: {
          id: parseInt(itemID),
        },
        data: {
            website: body.website,
            username: body.login,
            password: body.password,
        }
    });

    return NextResponse.json({message: "sucess"});
  }

  catch(err){
    return NextResponse.json({err});
  }
  
}