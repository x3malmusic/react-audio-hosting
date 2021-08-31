import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import uploadRoutes from "./routes/uploadRoutes";
import userRoutes from "./routes/userRoutes";
import errorHandler from "./middlewares/errorHandler";
import { connectDB } from "./database";

const app = express();

dotenv.config();
connectDB();

app.use(express.json({ extended: true }));

app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/user', userRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Socket server is running on ${PORT}`);
});