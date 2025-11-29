import { CircleAlert } from "lucide-react";

export default function FailToast() {
  return (
    <div className="rounded-md border px-4 py-3">
      <p className="text-sm">
        <CircleAlert
          className="me-3 -mt-0.5 inline-flex text-red-500"
          size={16}
          aria-hidden="true"
        />
        Erreur interne. Veuillez réessayer plus tard.
      </p>
    </div>
  );
}
