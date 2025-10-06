import FuturisticLoading from "@/components/futuristic-loading"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <FuturisticLoading color="#0ea5e9" accentColor="#10b981" />
    </div>
  )
}
