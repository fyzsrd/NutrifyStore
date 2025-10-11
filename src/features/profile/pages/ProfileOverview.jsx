import { useSelector } from "react-redux";

const ProfileOverview = () => {
  const user=useSelector((state)=>state.auth.user)
 
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Welcome back! <span> {user?.firstName }</span></h1>
      <p className="text-gray-600">Here you can manage your profile, orders, and settings.</p>
    </div>
  );
};
export default ProfileOverview;
