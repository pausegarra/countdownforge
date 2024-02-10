import { NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export const AuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    })
  ],
  theme: {
    logo: '/logo-text-white.svg'
  },
  callbacks: {
    async session({ session, token, user }) {
      (session as any).user.id = token.sub;

      return session;
    }
  },
};