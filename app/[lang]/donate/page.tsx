// app/[lang]/donate/page.tsx
"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { t, type Lang } from "@/lib/strings";

export default function Donate() {
  const { lang } = useParams<{ lang: Lang }>();
  const dict = t((lang as Lang) || "es");
  const search = useSearchParams();
  const cancelled = search.get("cancelled");

  const [amount, setAmount] = useState("25"); // dólares como texto
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency: "usd", lang }),
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url; // redirige a Stripe Checkout
      } else {
        alert(data?.error || "No se pudo iniciar el checkout.");
      }
    } catch (e) {
      alert("Error al conectar con Stripe.");
    } finally {
      setLoading(false);
    }
  }

  function quickSet(value: number) {
    setAmount(String(value));
  }

  return (
    <div className="container-responsive py-10">
      <h1 className="text-3xl font-bold">{dict.nav.donate}</h1>

      {cancelled && (
        <p className="mt-2 text-sm text-red-600">
          El pago fue cancelado. Intenta nuevamente.
        </p>
      )}

      <div className="max-w-md card mt-6 space-y-4">
        <label className="text-sm font-medium">Monto (USD)</label>
        <input
          type="number"
          step="0.01"
          min="0.5"
          className="border rounded-2xl px-3 py-2"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="flex flex-wrap gap-2">
          {[10, 25, 50, 100].map((v) => (
            <button
              key={v}
              onClick={() => quickSet(v)}
              className="px-3 py-2 rounded-xl border hover:bg-neutral-50"
            >
              ${v}
            </button>
          ))}
        </div>

        <Button onClick={handleCheckout} disabled={loading}>
          {loading ? "Redirigiendo..." : "Donar con Stripe"}
        </Button>
      </div>
    </div>
  );
}
