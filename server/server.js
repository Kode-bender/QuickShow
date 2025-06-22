import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";

const app = express();
const port = process.env.PORT || 3000;

await connectDB();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'healthy' });
});

// Inngest endpoint
app.use(
  '/api/inngest',
  serve({
    client: inngest,
    functions,
    signingKey: process.env.INNGEST_SIGNING_KEY 
  })
);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Inngest endpoint: http://localhost:${port}/api/inngest`);
});