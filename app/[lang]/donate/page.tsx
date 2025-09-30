"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { t, type Lang } from "@/lib/strings";

export default function Donate() {
  const { lang } = useParams<{ lang: Lang }>();
  const dict = t((lang as Lang) || "es");
  const search = useSearchParams();
  const cancelled = search.get("cancelled");

  const [amount, setAmount] = useState("25");
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
        window.location.href = data.url;
      } else {
        alert(data?.error || "No se pudo iniciar el checkout.");
      }
    } catch (e) {
      alert("Error al conectar con Stripe.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/back4.png')" }}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl grid md:grid-cols-2 overflow-hidden">
        {/* Izquierda: Imagen */}
        <div className="flex items-center justify-center bg-neutral-50 p-4">
          <Image
            src="/escuela11.png"
            alt="Niños pintando"
            width={370}       // tamaño fijo más pequeño
            height={370}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* Derecha: Formulario */}
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <div className="flex justify-center md:justify-start mb-4">
            <Image
              src="/logo-amarte.png"
              alt="Amarte"
              width={140}
              height={40}
            />
          </div>

          <h1 className="text-xl md:text-2xl font-bold mb-2">
            {lang === "es"
              ? "Haz tu donación"
              : "Make your donation"}
          </h1>
          <p className="text-sm text-neutral-600 mb-6">
            {lang === "es"
              ? "Completa el formulario y apoya la educación en El Salvador."
              : "Fill out the form and support education in El Salvador."}
          </p>

          {cancelled && (
            <p className="text-sm text-red-600 mb-4">
              {lang === "es"
                ? "El pago fue cancelado. Intenta nuevamente."
                : "The payment was cancelled. Please try again."}
            </p>
          )}

          {/* Opciones rápidas */}
          <div className="space-y-3">
            <label className="text-sm font-medium">
              {lang === "es" ? "Selecciona el monto" : "Choose an amount"}
            </label>

            <div className="space-y-2">
              {[25, 50, 100].map((v) => (
                <label
                  key={v}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="donation"
                    value={v}
                    checked={amount === String(v)}
                    onChange={() => setAmount(String(v))}
                    className="accent-pink-500"
                  />
                  <span className="text-sm">${v}</span>
                </label>
              ))}
            </div>

            {/* Monto personalizado */}
            <div className="mt-4">
              <label className="text-sm text-pink-600 cursor-pointer">
                {lang === "es"
                  ? "Ingresa un monto personalizado"
                  : "Enter a custom donation amount"}
              </label>
              <input
                type="number"
                step="0.01"
                min="0.5"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border rounded-xl px-3 py-2 mt-1"
              />
            </div>
          </div>

          {/* Botones */}
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              className="flex-1 py-2 rounded-xl border hover:bg-neutral-50"
              onClick={() => (window.location.href = `/${lang}`)}
            >
              {lang === "es" ? "Cancelar" : "Cancel"}
            </button>
            <Button
              onClick={handleCheckout}
              disabled={loading}
              className="flex-1 bg-pink-500 hover:bg-pink-600 text-white rounded-xl"
            >
              {loading
                ? lang === "es"
                  ? "Redirigiendo..."
                  : "Redirecting..."
                : lang === "es"
                  ? "Ir al pago"
                  : "Go to checkout"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
