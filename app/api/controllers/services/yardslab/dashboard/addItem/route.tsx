import { cookies } from "next/headers";
import { prisma } from "../../../../../../../lib/prisma"
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {

  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Método não permitido' });
  }

  const body = await req.json();
  const userID = req.cookies.get("loginID");

  try{
    const queryUpdate = await prisma.users.update({
        where: {
            id: parseInt(userID.value),
          },
        data: {
            yardPassAccount: 'TRUE'
        },
    });

    const queryCreate = await prisma.yardPass.create({
        data: {
            userId: parseInt(userID.value),
            password: body.password,
        },
    });

    cookies().set({
        name: 'yardPass',
        value: `TRUE`,
      });

    return NextResponse.json({message: "sucess"})


  }
  catch(err){
    return NextResponse.json({err});
  }
  
}