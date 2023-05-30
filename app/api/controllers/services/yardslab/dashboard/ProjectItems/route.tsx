import { prisma } from "../../../../../../../lib/prisma";
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Método não permitido' });
  }

  const userID = req.cookies.get("loginID");

  try{
      const query = await prisma.users.findUnique({
        where: {
          id: parseInt(userID.value)
        }
    });

    if (query.yardPassAccount === 'TRUE'){
        return NextResponse.json({message: "TRUE"});
    }

    else if (query.yardPassAccount === 'FALSE'){
        return NextResponse.json({message: "FALSE"});
    }
    else{
        return NextResponse.json({message: "InternalError"});
    }
  }
  catch(err){
    return NextResponse.json({err});
  }
  
}