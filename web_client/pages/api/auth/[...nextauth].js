import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {



  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "jsmith@gmail" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          let user = null
          await axios.post( process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/operator/login", {
            email: credentials.email.toLocaleLowerCase(),
            password: credentials.password
          })
          .then( res => {
            user = res.data
          })
          return user
        },
        
      })
    
  ],


  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userData = user
      }
      return token
    },
    async session({ session, token, user }) {
      session.userData = token.userData
      return session
    }
  },


  pages: {
    signIn: '../../operator/auth/login',
    signOut: '../../operator/auth/logout'

  }
 
  
}

export default NextAuth(authOptions)