
import { AddUserModel } from "@/Component/module/User/AddUserModel";
import UserCard from "@/Component/module/User/userCard";
import { selectUser } from "@/redux/features/user/userslice";
import { useAppSelector } from "@/redux/hook";



export default function Users() {
  const users = useAppSelector(selectUser);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
        <div className="flex justify-end">
                <AddUserModel/>
            </div>
  <div>
  {
        users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))
      }
  </div>
    </div>
  )
}
