import { Spinner } from "@/components/ui/spinner"

export default function Loading() {
  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4">
      <Spinner />
    </div>
  )
}