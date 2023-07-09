import { useSession } from "next-auth/react";
import SignInPage from "@app/signin/page";
import Loading from "@app/loading";

const ClientAuthHOC = (Component) => {
  return function Auth({ ...props }) {
    const { data: session, status } = useSession();

    if (status === "loading") {
      return <Loading />;
    }

    if (status === "authenticated") {
      return <Component {...props} session={session} />;
    }

    return (
      <>
        <div>
          <h1>
            <center> You need to singin to access this page </center>
          </h1>
          <SignInPage />
        </div>
      </>
    );
  };
};

export default ClientAuthHOC;
