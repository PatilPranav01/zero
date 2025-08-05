const { z } = require("zod");

const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters long" }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" }),

    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be at least 10 characters long" }),

    password: z
        .string({ required_error: "Password is required" })
        .min(8, { message: "Password must be at least 8 characters long" })
});
// Login schema ✅
const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

module.exports = {signupSchema, loginSchema};
