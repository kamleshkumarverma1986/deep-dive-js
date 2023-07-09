"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between w-full mb-8 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Deep Dive into JavaScript</p>
      </Link>
      {status !== "loading" && (
        <div className="flex relative">
          {session?.user ? (
            <div className="flex">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                onClick={() => setToggleDropdown(!toggleDropdown)}
              />
              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/create-course"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Create Course
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut({ callbackUrl: "/" });
                    }}
                    className="mt-5 w-full black_btn"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/signin">Sign in</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
