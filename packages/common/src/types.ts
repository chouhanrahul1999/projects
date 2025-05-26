
const { z } = require("zod");

const CreateuserSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string(),
    name: z.string()
})

const SignInSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string()
})

const CreateRoomSchema = z.object({
    name: z.string().min(3).max(20)
})

module.exports = {
    CreateuserSchema,
    SignInSchema,
    CreateRoomSchema
};