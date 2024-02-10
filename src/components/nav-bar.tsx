import Link from 'next/link';
import { SignInButton } from './sign-in-button';
import { LogoutButton } from './logout-button';
import React from 'react';
import { getSession } from '@/helpers/get-session';
import Image from 'next/image';
import logo from '../../public/logo-text-white.svg'

export async function NavBar() {
  const session = await getSession()

  return (
    <nav className="navbar bg-base-100">
      <div className="container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <Image src={logo} alt='logo' height={40} />
          </a>
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal px-1">
            {session && session.user ? (
              <React.Fragment>
                {/* <li className='menu menu-horizontal px-1'>{session.user.name}</li> */}
                <li className='justify-center'>
                  <Link href="/my-countdowns">My countdowns</Link>
                </li>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Tailwind CSS Navbar component" src={session.user.image || ''} />
                    </div>
                  </div>
                  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <LogoutButton />
                  </ul>
                </div>
              </React.Fragment>
            ) : (
              <SignInButton />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}