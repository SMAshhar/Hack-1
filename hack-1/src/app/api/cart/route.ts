// import { NextResponse, NextRequest } from "next/server";
// import { db, cartTable } from "@/lib/drizzle";
// import { cookies } from "next/headers";
// import { eq } from "drizzle-orm";

// import { v4 as uuid } from "uuid";

// // const userId = async () => {
// //   const res = await fetch(`/api/cart/${cookies().get("userId")?.value}`);
// // };
// // Can go the above way, pass the above in the .where of the GET below. Otherwise we can do as done below.

// export const GET = async (request: NextRequest) => {
//   const res = await fetch(`http://localhost:3000/cart/${cookies().get("userId")?.value}`);
//   console.log("This is the response : ", res)

//   const userId = cookies().get("user_id");
//   console.log('this is used id : ', userId)

//   const req = request.nextUrl;
//   const uid = req.searchParams.get("user_id") as string;
//   console.log('this is uid: ', uid);

//   if (!uid) {
//     return NextResponse.json({ message: "Your Cart Is empty" });
//   }
//   try {
//     const res = await db
//       .select()
//       .from(cartTable)
//       .where(eq(cartTable.user_id, uid));
//     return NextResponse.json({ res });
//   } catch (error) {
//     console.log('this is error',error);
//     return NextResponse.json({ message: "Something went wrong" });
//   }
// };

// export const POST = async (request: NextRequest) => {
//   const req = await request.json();
//   const uid = uuid();
//   const setCookies = cookies();

//   const userId = cookies().get("user_id");

//   if (!userId) {
//     setCookies.set("user_id", uid);
//   }

//   // quantity, product id and user id
//   try {
//     const res = await db
//       .insert(cartTable)
//       .values({
//         product_id: req.product_id,
//         quantity: req.quantity,
//         user_id: userId?.value as string,
//         product_size: req.product_size,
//       })
//       .returning();
//       console.log(res)
//     return NextResponse.json({ res });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Something went wrong" });
//   }
// };

// export const DELETE = async (request: NextRequest) => {

//     const res = await request.json()
//     const product_id = res.product_id

//     const req = request.nextUrl;
//     const uid = req.searchParams.get("userId") as string;
//     console.log(uid);

//     if (!uid) {
//       return NextResponse.json({ message: "Your Cart Is empty" });
//     }
//     try {
//       const res = await db
//         .select()
//         .from(cartTable)
//         .where(eq(cartTable.user_id, uid)).where(eq(cartTable.product_id,product_id));
//       return NextResponse.json({ res });
//     } catch (error) {
//       console.log(error);
//       return NextResponse.json({ message: "Something went wrong" });
//     }
//   };
