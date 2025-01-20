import { AddTaskModel } from "@/Component/module/task/AddTaskModal";
import TaskCard from "@/Component/module/task/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";

import { useAppSelector } from "@/redux/hook";

export default function Task() {
    const tasks = useAppSelector(selectTasks);

    console.log(tasks);
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-between items-center">
                <h1>Task</h1>
                <AddTaskModel/>
            </div>
            <div className="space-y-5 mt-5">
                {
                    tasks.map((task, index) => (
                        <TaskCard key={index} task={task} />
                    ))
                }
            </div>
        </div>
    );
}
