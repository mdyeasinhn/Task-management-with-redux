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
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUser } from "@/redux/features/user/userslice";
import {  IUser } from "@/types";
import { DialogDescription } from "@radix-ui/react-dialog";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export function AddUserModel() {
    const form = useForm({
        defaultValues: {
            name: "",
        },
    });
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Form Data: ", data); // This will log the field data
        dispatch(addUser(data as IUser))
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add User</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogDescription className="sr-only">Fill up this form to add task</DialogDescription>
                <DialogHeader>
                    <DialogTitle>Add User</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
                        {/* Title Input */}
                        <FormField
                            control={form.control}
                            name="name" // Ensure the name matches the form's default values
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>

                                    <FormControl>
                                        <Input placeholder="Enter your name" {...field} value={field.value || ""} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    <DialogFooter className="">
                            <Button className="mt-5" type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
