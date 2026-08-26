import express from "express";
import cors from "cors";

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "profile-backend",
    time: new Date().toISOString(),
  });
});

app.get("/api/profile", (_req, res) => {
  res.json({
    name: "Profile Service",
    version: "1.0.0",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`profile-backend listening on :${PORT}`);
});
