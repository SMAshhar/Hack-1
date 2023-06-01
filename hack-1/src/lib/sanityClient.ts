import { createClient } from "next-sanity"

export const client = createClient({
    apiVersion: "2023-05-29",
    dataset: "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: true
})