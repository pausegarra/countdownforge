import { AuthOptions } from '@/config/auth-options';
import NextAuth from "next-auth";

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };