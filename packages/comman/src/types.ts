import { ParseStatus, z } from "zod";

export const CreateUserSchema = z.object({
    username:z.string().min(1, "Username is required"),
    password:z.string().min(6, "Password must be at least 6 characters long"),
    name:z.string()
})

export const SigninUserSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})

export const CreateRoomSchema = z.object({
    name: z.string().max(20),
})