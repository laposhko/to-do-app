"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CreateForm from "@/ui/create-form";
export default function Modal() {
  const router = useRouter();

  // Close the modal when clicking outside
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        router.back();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <div className="fixed inset-0 bg-opacity-0 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold">Create Item</h2>
        <CreateForm></CreateForm>
        <button
          className="mt-4 px-4 py-2 bg-gray-200"
          onClick={() => router.back()}
        >
          Close
        </button>
      </div>
    </div>
  );
}
