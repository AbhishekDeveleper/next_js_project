// src/pages/api/submit.js
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import query from "@/app/lib/db";
export async function POST(req) {
    const formData = await req.formData();
    const name = formData.get("name");
    const email_id = formData.get("email_id");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    let image = formData.get("image");
    const contact = formData.get("contact");

    // Ensure the uploads directory exists
    const uploadDir = path.join(process.cwd(), "public", "schoolImage");
    await fs.mkdir(uploadDir, { recursive: true });

    // Save the image to the public/schoolImage directory
    const imagePath = path.join(uploadDir, image.name);
    await fs.writeFile(imagePath, Buffer.from(await image.arrayBuffer()));

    const imageUrl = `${image.name}`;
    image = imageUrl;
    const result = await query(
        "INSERT INTO schools (name, email_id, address, state, city, contact, image) VALUES (?, ?, ?, ?, ?, ?, ?)", [name, email_id, address, state, city, contact, image]
    );

    console.log(result.data);
    return NextResponse.json({
        name,
        email_id,
        address,
        city,
        state,
        // image: imageUrl,
        image,
        contact,
    });
}