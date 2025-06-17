
import mongoose from "mongoose";

// 1. MongoDB connection (local, db: rg)

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}
const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

// 2. Mongoose model for 'git' collection
const ContactMessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
}, { collection: "git" });

const ContactMessage = mongoose.models.ContactMessage || mongoose.model("ContactMessage", ContactMessageSchema);

// 3. API route handler
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    await dbConnect();

    // Store in MongoDB (db: rg, collection: git)
    await ContactMessage.create({ name, email, phone, subject, message });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error saving contact message:", error);
    return new Response(JSON.stringify({ error: "Failed to save message" }), { status: 500 });
  }
} 