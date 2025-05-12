import { useParams } from "react-router";

function UserProfile() {
  const { id } = useParams();
  return (
    <div className="text-2xl font-semibold">
      UserProfile for id: <span className="text-blue-600">{id}</span>
    </div>
  );
}

export default UserProfile;
