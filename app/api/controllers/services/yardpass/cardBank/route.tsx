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

    if (parameter == "editCardBank") {
      const query = await prisma.yardPassPayments.update({
        where: {
          id: parseInt(itemID),
        },
        data: {
          username: body.username,
          card_name: body.card_name,
          card_number: body.card_number,
          card_date: body.card_date,
          card_security: body.card_security,
        }
      });

      return NextResponse.json({ message: "success" });
    } 
    else if (parameter == "insertCardBank") {
      const query = await prisma.yardPassPayments.create({
        data: {
          user_Id: parseInt(userID),
          username: body.cardUsername,
          card_name: body.cardName,
          card_number: body.cardNumber,
          card_date: body.cardDate,
          card_security: body.cardSecurity,
        },
      });

      return NextResponse.json({ message: "success" });
    } 
    else if (parameter == "deleteCardBank") {
      const query = await prisma.yardPassPayments.delete({
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
