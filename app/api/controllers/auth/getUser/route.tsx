import { prisma } from "../../../../../lib/prisma";
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Método não permitido' });
  }
  const body = await req.json();

  try{
      const query = await prisma.users.findUnique({
        where: {
          email: body.email
        }
    });

    if (query !== null){
      if (body.password === query.password){
        if(body.rememberme === "on"){
          let currentDate = new Date();
          let expirationDate = new Date();
          expirationDate.setDate(currentDate.getDate() + 365);
          cookies().set({
            name: 'loginID',
            value: `${query.id}`,
            expires: expirationDate,
            httpOnly: true,
            path: '/',
            secure: true
          });
          cookies().set({
            name: 'yardPass',
            value: `${query.yardPassAccount}`,
            expires: expirationDate,
            httpOnly: true,
            path: '/',
            secure: true
          });
          
          return NextResponse.json({message: "sucess"});
        }
        else{
          let currentDate = new Date();
          let expirationDate = new Date();
          expirationDate.setMinutes(currentDate.getMinutes() + 20);
          cookies().set({
            name: 'loginID',
            value: `${query.id}`,
            expires: expirationDate,
            httpOnly: true,
            path: '/',
            secure: true
          });
          cookies().set({
            name: 'yardPass',
            value: `${query.yardPassAccount}`,
            expires: expirationDate,
            httpOnly: true,
            path: '/',
            secure: true
          });

          return NextResponse.json({message: "sucess"});
        }

      }
      else{
        return NextResponse.json({message: "passwordError"})
      }
    }
    else{
      return NextResponse.json({message: "userNotExist"})
    }
  }
  catch(err){
    return NextResponse.json({err});
  }
  
}