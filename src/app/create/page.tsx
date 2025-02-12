import CreateForm from "@/ui/create-form";
export default function CreatePage() {
  return (
    <div className="p-10 flex flex-col  items-center">
      <h1 className="text-2xl font-bold mb-20">Create a New Item</h1>
      <CreateForm></CreateForm>
    </div>
  );
}
