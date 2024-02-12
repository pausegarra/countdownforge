export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    '/my-countdowns',
    '/my-countdowns/add',
    '/my-countdowns/:id/edit'
  ],
};