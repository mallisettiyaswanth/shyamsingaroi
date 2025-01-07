import { createClient } from "@/actions/server";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";

export async function POST(request: Request) {
  const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET || ``;

  if (!CLERK_WEBHOOK_SECRET) {
    throw new Error("Clerk Webhook Secret is not set");
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const payload = await request.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(CLERK_WEBHOOK_SECRET);

  let event: WebhookEvent;
  try {
    event = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (e) {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }

  const eventType = event.type;
  const supabase = await createClient();

  switch (eventType) {
    case "user.created":
      const data = payload.data;
      console.log(data);
      const insertingData = {
        id: data.id,
        user_id: data.id,
        email: data.email_addresses.find(
          (e: any) => e.id === data.primary_email_address_id
        ).email_address,
        firstName: data.first_name,
        lastName: data.last_name,
        image: data.profile_image_url,
        username: data.username,
      };
      const { data: createData, error } = await supabase
        .from("user")
        .insert([insertingData]);
      if (error) {
        console.log(error);
        throw new Error(error.message);
      }

      console.log("User created");
      break;
    case "user.deleted":
      await supabase.from("user").delete().eq("id", payload.data.id);
      break;
    case "user.updated":
      await supabase
        .from("user")
        .update({
          firstName: payload.data.first_name,
          lastName: payload.data.last_name,
          image: payload.data.profile_image_url,
        })
        .eq("id", payload.data.id);
    case "role.updated":
      console.log(payload);
      break;
    default:
      throw new Error("Invalid event type");
  }

  return Response.json({ message: "Received event" }, { status: 201 });
}

export async function GET() {
  return Response.json({ message: "Hello World!" });
}
