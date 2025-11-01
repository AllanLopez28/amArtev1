
import { t, type Lang } from "@/lib/strings";
import { Button } from "@/components/ui/button";

export default async function Contact(
  { params }: { params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;
  const dict = t(lang || "es");

  return (
    <div className="container-responsive py-10">
      <h1 className="text-3xl font-bold">{dict.contactTitle}</h1>
      <p className="opacity-80 mt-2 max-w-2xl">{dict.contactBody}</p>

      <form className="max-w-lg card mt-6 grid gap-3">
        <input className="border rounded-2xl px-3 py-2" placeholder="Nombre / Name" />
        <input className="border rounded-2xl px-3 py-2" placeholder="Correo / Email" />
        <textarea className="border rounded-2xl px-3 py-2" rows={5} placeholder="Mensaje / Message" />
        <Button>Enviar</Button>
      </form>

    </div>
  );
}
