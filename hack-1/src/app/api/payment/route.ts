import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
       apiVersion: "2022-11-15",
    });
    const url = request.nextUrl


}
