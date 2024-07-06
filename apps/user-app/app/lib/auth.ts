import prisma from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import z from "zod";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {
          label: "Name",
          type: "text",
          placeholder: "John",
          required: false,
        },
        email: {
          label: "Email",
          type: "text",
          placeholder: "john@example.com",
          required: false,
        },
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "1231231231",
          required: true,
        },
        password: { label: "Password", type: "password", required: true },
      },
      // TODO: User credentials type from next-aut
      async authorize(credentials: any) {
        // Do zod validation, OTP validation here
        const hashedPassword = await bcrypt.hash(credentials.password, 10);

        const verifySchema = z.object({
          name: z.string(),
          password: z.string(),
          number: z.string(),
          email: z.string().email(),
        });

        const status = verifySchema.safeParse({
          number: credentials.phone,
          password: hashedPassword,
          email: credentials.email,
          name: credentials.name,
        });
        // Do zod validation, OTP validation here

        if (!status.success) return null;

        const existingUser = await prisma.user.findFirst({
          where: {
            number: credentials.phone,
          },
        });

        if (existingUser) {
          const passwordValidation = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );
          if (passwordValidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.email,
            };
          }
        }
          try {
            const newUser = await prisma.user.create({
              data: {
                name: credentials.name,
                password: hashedPassword,
                number: credentials.phone,
                email: credentials.email,
              },
            });

            const balance = await prisma.balance.create({
                data:{
                    userId:newUser.id,
                    amount: (Math.random()*1000000),
                    locked:0
                }
            })
            if (newUser) {
              return {
                id: newUser.id.toString(),
                name: newUser.name,
                email: newUser.email,
              };
            }
          } catch (e) {
            console.log(e);
          }
        

        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    // TODO: can u fix the type here? Using any is bad
    async session({ token, session }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
};
