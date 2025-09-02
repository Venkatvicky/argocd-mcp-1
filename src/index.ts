// index.js
import dotenv from "dotenv";
import { cmd } from "./cmd/cmd.js";

// Load environment variables from .env
dotenv.config();

// Run the cmd function
cmd();
