import dotenv from "dotenv"; //module.js
dotenv.config(); 
import mongoose from "mongoose"; 
import app from "./app"; 

mongoose
        .connect(process.env.MONGO_URL as string, {})
        .then((data) => {
            console.log("MongoDB connection succeded");
            const PORT = process.env.PORT ?? 3003;
            app.listen(PORT, function()  {
                console.log(`🚀 Server is running at http://localhost:${PORT}`);
            });
        })
        .catch((err) => {
            console.log("ERROR on connection MongoDB: ", err);
        });