import { Schema, model } from "mongoose";

export const ROLES = ["USUARIO", "ADMIN", "MODERADOR","RESIDENTE","SUPERVISOR","CRP"];

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Role", roleSchema);
