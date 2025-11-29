import { CircleCheckIcon } from "lucide-react";

export default function SuccessToast() {
  return (
    <div className="border-eborder rounded-md border px-4 py-3">
      <p className="text-sm">
        <CircleCheckIcon
          className="me-3 -mt-0.5 inline-flex text-emerald-500"
          size={16}
          aria-hidden="true"
        />
        Votre message a été envoyé avec succès. Nous vous répondrons dans les
        plus brefs délais.
      </p>
    </div>
  );
}
