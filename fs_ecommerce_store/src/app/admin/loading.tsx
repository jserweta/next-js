import { Loader2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default function adminLoading() {
  return (
    <div className="flex justify-center">
      <Loader2 className="size-24 animate-spin" />
    </div>
  );
}
