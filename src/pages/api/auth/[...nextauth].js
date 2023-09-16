import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
/* import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook"; */

//import Providers from "next-auth/providers";
export const authOptions = {
  //configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    /* GithubProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }), */
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
