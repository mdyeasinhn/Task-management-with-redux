import { Button } from "@/components/ui/button";
import { deleteUser } from "@/redux/features/user/userslice";
import { useappDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";


interface IProps {
    user: IUser;
}

export default function UserCard({ user }: IProps) {
    const dispatch = useappDispatch();
    return (
        <div className="mx-auto max-w-7xl px-5 ">
          
            <div className="border border-b-2 border-green-400  rounded-md w-[300px] h-[80px]">
                <div className="flex justify-between p-5">
                    <h1 className=" text-xl">{user.name}</h1>
                    <div className=" text-xl">
                        <Button onClick={() => dispatch(deleteUser(user.id))}
                            variant="link" className="p-0 text-red-500">
                            <Trash2 />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
