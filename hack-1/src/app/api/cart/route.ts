import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/dist/client/components/headers";

export const GET = async (request: NextRequest) => {
  try {
    const res = await db.select().from(cartTable);

    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error" });
  }
};

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
        quantity: 1,
        user_id: cookies().get("userId")?.value,
      });

    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error" });
  }
};
