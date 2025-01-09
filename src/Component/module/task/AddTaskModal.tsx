import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

export function AddTaskModel() {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      dueDate: "",
      priority: ""// Initialize the field
    },
  });

  const onSubmit = (data: { title: string }) => {
    console.log("Form Data: ", data); // This will log the field data
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">Fill up this form to add task</DialogDescription>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            {/* Title Input */}
            <FormField
              control={form.control}
              name="title" // Ensure the name matches the form's default values
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>

                  <FormControl>
                    <Input placeholder="Enter your task title" {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Description Input */}
            <FormField
              control={form.control}
              name="description" // Ensure the name matches the form's default values
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter your task description" {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dueDate" // Ensure the name matches the form's default values
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Due Date</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your task description" {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your Priority" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <DialogFooter className="mt-5">
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
