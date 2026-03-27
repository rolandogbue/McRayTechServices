import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Optional: protect endpoint with a secret token
const ADMIN_BOOTSTRAP_SECRET = process.env.ADMIN_BOOTSTRAP_SECRET;

app.post("/create-admin", async (req, res) => {
  try {
    // Basic protection layer
    const { secret, email, password } = req.body;

    if (secret !== ADMIN_BOOTSTRAP_SECRET) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    if (!email || !password) {
      return res.status(400).json({ error: "Missing email or password" });
    }

    // 1. Create user via Supabase Admin API
    const userRes = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      },
      body: JSON.stringify({
        email,
        password,
        email_confirm: true,
      }),
    });

    const userData = await userRes.json();

    if (!userRes.ok) {
      return res.status(400).json({ error: userData });
    }

    // 2. Assign admin role
    const roleRes = await fetch(`${SUPABASE_URL}/rest/v1/user_roles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        user_id: userData.id,
        role: "admin",
      }),
    });

    if (!roleRes.ok) {
      return res
        .status(500)
        .json({ error: "User created but role assignment failed" });
    }

    return res.json({
      message: "Admin created successfully",
      user_id: userData.id,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
