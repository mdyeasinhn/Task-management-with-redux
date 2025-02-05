import { AddTaskModel } from "@/Component/module/task/AddTaskModal";
import TaskCard from "@/Component/module/task/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTaskQuery } from "@/redux/api/baseApi";

import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";

import { useappDispatch, useAppSelector } from "@/redux/hook";
import { ITask } from "@/types";

export default function Task() {
    const {data, isLoading, isError} = useGetTaskQuery(undefined);

    
    console.log({data, isLoading, isError})
    // const tasks = useAppSelector(selectTasks);
    const dispatch = useappDispatch();


    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-between items-center gap-5">
                <h1 className="mr-auto">Task</h1>
                <Tabs defaultValue="all" className="">
                    <TabsList  className="grid w-full grid-cols-4">
                        <TabsTrigger onClick={() => dispatch(updateFilter('all'))} value="all">All</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('low'))} value="low">Low</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('medium'))} value="medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('high'))} value="high">High</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModel />
            </div>
            <div className="space-y-5 mt-5">
                {
                  !isLoading && data.tasks.map((task : ITask,) => (
                        <TaskCard key={index} task={task} />
                    ))
                }
            </div>
        </div>
    );
}
