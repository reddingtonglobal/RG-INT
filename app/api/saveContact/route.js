// route.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

// Connect to MongoDB
async function dbConnect() {
  if (!MONGODB_URI) return false;
  if (mongoose.connection.readyState >= 1) return true;
  try {
    await mongoose.connect(MONGODB_URI);
    return true;
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    return false;
  }
}

// Schema for Contact (stored in 'git' collection)
const ContactMessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
}, { collection: "git" });

const ContactMessage = mongoose.models.ContactMessage || mongoose.model("ContactMessage", ContactMessageSchema);

// Schema for Newsletter Subscribers (stored in 'newsletter subscribers' collection)
const NewsletterSubscriberSchema = new mongoose.Schema({
  name: String,
  email: String,
  subscribedAt: { type: Date, default: Date.now },
}, { collection: "newsletter subscribers" });

const NewsletterSubscriber = mongoose.models["newsletter subscribers"] || mongoose.model("newsletter subscribers", NewsletterSubscriberSchema);

// Schema for Financial Services leads (stored in 'financial_leads' collection)
const FinancialLeadSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  email: String,
  pan: String,
  aadhaar: String,
  employmentType: String,
  monthlyIncome: String,
  serviceType: String,
  loanAmount: String,
  city: String,
  createdAt: { type: Date, default: Date.now },
}, { collection: "financial_leads" });

const FinancialLead = mongoose.models.FinancialLead || mongoose.model("FinancialLead", FinancialLeadSchema);

// Route handler
export async function POST(req) {
  try {
    const body = await req.json();
    const connected = await dbConnect();

    if (connected) {
      if (body?.type === "Newsletter") {
        const { name, email } = body;
        await NewsletterSubscriber.create({ name, email });
      } else if (body?.type === "FinancialLead") {
        const { fullName, phone, email, pan, aadhaar, employmentType, monthlyIncome, serviceType, loanAmount, city } = body;
        await FinancialLead.create({ fullName, phone, email, pan, aadhaar, employmentType, monthlyIncome, serviceType, loanAmount, city });
      } else {
        const { name, email, phone, subject, message } = body;
        await ContactMessage.create({ name, email, phone, subject, message });
      }
    } else {
      console.warn("MongoDB unavailable — skipping DB save, proceeding with email.");
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error saving to database:", error);
    // Still return 200 so the email can be sent on the client side
    return new Response(JSON.stringify({ success: true, warning: "DB save failed" }), { status: 200 });
  }
}
