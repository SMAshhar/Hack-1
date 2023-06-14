import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { config } from "process";

export async function GET(request:NextRequest) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
        apiVersion:'2022-11-15'
    })
    const prices = await stripe.prices.list({
        limit:4
    })
    return NextResponse.json(prices.data.reverse())
}