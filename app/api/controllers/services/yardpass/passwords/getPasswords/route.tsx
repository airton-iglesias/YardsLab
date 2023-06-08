import { prisma } from "../../../../../../../lib/prisma"
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Método não permitido' });
  }

  const userID = req.cookies.get("loginID").value

  try{
      const query = await prisma.yardPassPasswords.findMany({
        where: {
          user_Id: parseInt(userID)
        }
    });

    if (query !== undefined && query.length > 0){
        return NextResponse.json(query)
    }
    else{
        return NextResponse.json({message: "userNotExist"})
    }
  }
  catch(err){
    return NextResponse.json({err});
  }
  
}