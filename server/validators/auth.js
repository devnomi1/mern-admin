const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "username is required" })
    .trim()
    .min(3, { message: "username must have minium 3 characters" })
    .max(255, { message: "username not must be more 255 characters" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "email is invalid" })
    .max(255, { message: "email not must be more 255 characters" }),
  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(3, { message: "phone must have minium 3 letters" })
    .max(255, { message: "phone not must be more 255 characters" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(7, { message: "password must be at least 6 characters" })
    .max(255, { message: "password not must be more 255 characters" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "email is invalid" })
    .max(255, { message: "email not must be more 255 characters" }),

  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(7, { message: "password must be at least 9 characters" })
    .max(255, { message: "password not must be more 255 characters" }),
});
module.exports = { signupSchema, loginSchema };
