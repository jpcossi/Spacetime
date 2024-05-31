import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { FormMemory } from "@/components/FormMemory";

export default function NewMemory(){
  return(
    <div className="flex-1 flex flex-col gap-4">
      <Link href="/" className="flex items-center gap-1 text-sm text-gray-200">
        <ChevronLeft className="h-4 w-4"/>
        voltar à timeline
      </Link>
      <FormMemory />      
    </div>
  )
} 