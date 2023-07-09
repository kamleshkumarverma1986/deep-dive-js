import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@app/api/auth/[...nextauth]/route";
import SignInPage from "@app/signin/page";

const ServerAuthHOC = (Component) => {
  return async function Auth({ ...props }) {
    const session = await getServerSession(nextAuthOptions);

    if (session) {
      return <Component {...props} session={session} />;
    }

    return (
      <>
        <h1>
          <center> You need to singin to access this page </center>
        </h1>
        <SignInPage />
      </>
    );
  };
};

export default ServerAuthHOC;
