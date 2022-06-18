import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({

  providers: [
    CredentialsProvider({
      name: "CyberCity",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        const user = { id: 1, name: "Dubsky", email: "dubsky@example.com", status: "CEO" }
  
        if (user) {
          return user
        } else {
          return null
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
})