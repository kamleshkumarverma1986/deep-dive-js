import ServerAuthHOC from "@utils/ServerAuthHOC";

const Profile = async ({ session }) => {
  return (
    <>
      <div>This is the Profile Page</div>
      <h5> hello {session.user.name}</h5>
    </>
  );
};

export default ServerAuthHOC(Profile);
