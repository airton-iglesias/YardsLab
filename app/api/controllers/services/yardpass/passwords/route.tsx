import { prisma } from "../../../../../../lib/prisma";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Método não permitido' });
  }

  try {
    const body = await req.json();
    const userID = req.cookies.get("loginID")?.value;
    const itemID = body.itemID;
    const parameter = body.parameter;


    if (parameter == "getPasswords") {
      const query = await prisma.users.findMany({
        where: {
          id: parseInt(userID)
        },
        include: {
          YardPassPasswords: true,
          YardPassPayments: true,
        },
      });

      return NextResponse.json(query)
    } 
    else if (parameter == "editPasswords") {
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

      return NextResponse.json({ message: "success" });
    } 
    else if (parameter == "insertPasswords") {
      const query = await prisma.yardPassPasswords.create({
        data: {
          user_Id: parseInt(userID),
          website: body.website,
          username: body.login,
          password: body.password
        },
      });

      return NextResponse.json({ message: "success" });
    } 
    else if (parameter == "deletePasswords") {
      const query = await prisma.yardPassPasswords.delete({
        where: {
          id: parseInt(itemID),
        },
      });

      return NextResponse.json({ message: "success" });
    } 
    else {
      return NextResponse.json({ message: "Parâmetro inválido" });
    }
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
