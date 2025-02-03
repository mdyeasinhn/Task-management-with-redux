import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";


export default function Users() {
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="border border-b-2 border-green-400  rounded-md w-[300px] h-[80px]">
        <div className="flex justify-between p-5">
          <h1 className=" text-xl">enan</h1>
          <div className=" text-xl">
            <Button 
              variant="link" className="p-0 text-red-500">
              <Trash2 />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
