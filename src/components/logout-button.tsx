'use client';

import { signOut } from 'next-auth/react';

export function LogoutButton() {
  return (
    <li onClick={() => signOut()}><a>Logout</a></li>
  );
}