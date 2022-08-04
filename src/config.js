import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI ||  "mongodb+srv://Sandro:54321@proyect.xvlx936.mongodb.net/dbpaisdesarrollo",
   PORT: process.env.PORT || 4000, 
   SECRET: 'products-api' 
};
