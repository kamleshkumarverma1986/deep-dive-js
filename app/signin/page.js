"use client";

import { useState, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { signIn, getProviders } from "next-auth/react";
import { useSession } from "next-auth/react";

const SignInPage = async () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [providers, setProviders] = useState(null);
  const searchParams = useSearchParams();

  const getCallbackUrl = () => {
    const searchParamsCallbackUrl = searchParams.get("callbackUrl");
    if (searchParamsCallbackUrl) {
      return searchParamsCallbackUrl;
    }

    if (pathname !== "/signin") {
      return pathname;
    }

    return "/";
  };

  const callbackUrl = getCallbackUrl();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  if (status === "authenticated") {
    return <p>You have already Signed in as {session.user.email}</p>;
  }

  return (
    <>
      {status !== "loading" && (
        <section className="flex min-h-full overflow-hidden pt-16 sm:py-28">
          <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
            <div className="relative mt-12 sm:mt-16">
              <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
                Sign in to your account
              </h1>
            </div>
            <div className="sm:rounded-5xl -mx-4 mt-10 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:p-24">
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id, { callbackUrl });
                    }}
                    className="black_btn"
                  >
                    Signin with {provider.name}
                  </button>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SignInPage;
