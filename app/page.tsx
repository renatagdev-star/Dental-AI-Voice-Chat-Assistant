import ChatDemo from "../components/ChatDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-rose-100 text-slate-900">
      {/* top bar */}
      <header className="border-b border-rose-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-rose-100 text-2xl">
              🦷
            </div>
            <div>
              <p className="text-sm font-semibold text-rose-900">
                SmileCare Dental Clinic
              </p>
              <p className="text-[11px] text-rose-500">
                Berlin · Prenzlauer Berg
              </p>
            </div>
          </div>

          <div className="hidden text-xs font-medium text-rose-600 sm:block">
            Mon–Fri 08:00–18:00 · Sat 10:00–14:00
          </div>
        </div>
      </header>

      <div className="mx-auto flex min-h-[calc(100vh-56px)] max-w-6xl flex-col px-4 pb-12 pt-8 md:flex-row md:items-start md:justify-between md:gap-10">
        {/* left – clinic info */}
        <section className="max-w-xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
            Gentle dentistry · Modern technology
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-rose-950">
            Healthy teeth,{" "}
            <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">
              relaxed patients
            </span>
            .
          </h1>

          <p className="text-sm sm:text-base text-rose-700 leading-relaxed">
            We combine a calm, warm atmosphere with digital tools. Our AI
            receptionist helps you book, reschedule or cancel appointments 24/7,
            while our doctors focus entirely on your treatment.
          </p>

          {/* call box */}
          <div className="space-y-3 rounded-3xl border border-rose-100 bg-white/90 p-4 shadow-sm shadow-rose-100/70">
            <p className="text-xs font-semibold text-rose-800">
              Call the clinic
            </p>
            <p className="text-lg font-semibold text-rose-600">
              <a href="tel:+491234567890">+49 123 456 7890</a>
            </p>
            <p className="text-[11px] text-rose-500">
              You will first speak with our{" "}
              <span className="font-semibold text-rose-600">
                AI receptionist
              </span>{" "}
              that can offer free times, book new appointments or cancel an
              existing one. For emergencies, you are forwarded to our team.
            </p>
          </div>

          {/* services */}
          <section className="grid gap-3 text-xs sm:text-sm text-rose-800">
            <div className="rounded-2xl border border-rose-100 bg-white/90 p-3.5">
              <h3 className="font-semibold text-rose-900 mb-1">
                Preventive check-ups
              </h3>
              <p>
                Regular check-ups, professional cleaning and gentle prevention
                for all ages.
              </p>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-white/90 p-3.5">
              <h3 className="font-semibold text-rose-900 mb-1">
                Pain &amp; emergency
              </h3>
              <p>
                Fast appointments for acute tooth pain, swelling or broken
                teeth.
              </p>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-white/90 p-3.5">
              <h3 className="font-semibold text-rose-900 mb-1">
                Aesthetic treatments
              </h3>
              <p>
                Whitening, aligners and natural-looking aesthetic corrections.
              </p>
            </div>
          </section>

          {/* small note */}
          <p className="pt-1 text-[11px] text-rose-500">
            This website is a demo. The AI receptionist is connected to a test
            calendar, not to real patient data.
          </p>
        </section>

        {/* right – chat */}
        <aside className="mt-8 w-full max-w-sm md:mt-0">
          <ChatDemo />
        </aside>
      </div>
    </main>
  );
}
