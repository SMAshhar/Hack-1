import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { cookies } from "next/dist/client/components/headers";
import { v4 as uuid } from 'uuid'


export const POST = async (request: NextRequest) => {
    
    const req = await request.json();

    const uid = uuid();
    const setCookies = cookies();
  
    const userid = cookies().has("userId")
     userid ? setCookies.set("userId", uid)
      : console.log(cookies);

    try {
        const res = await db
          .isnert(cartTable)
          .values({
            product_id: req.product_id,
            quantity: req.quantity,
            user_id: cookies().get("userId")?.value,
          });
        } catch (error) {
            console.log(error)
            return NextResponse.json({'message': error})
        }

}  