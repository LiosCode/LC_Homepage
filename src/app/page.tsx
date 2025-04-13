import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Cinematic.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get your personal{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              research agent
            </code>
            !
          </li>
          <li>We make you visible to customers. Get your website now!</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
  className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#ccc] group text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  target="_blank"
  rel="noopener noreferrer"
>
  <Image
    className="transition-all duration-200 invert group-hover:invert-0"
    src="/logo70x70.png"
    alt="Vercel logomark"
    width={30}
    height={30}
  />
  <span className="transition-colors group-hover:text-black">
    Service
  </span>
</a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </main>
      <footer className="fixed bottom-0 right-0 p-6 flex gap-6 flex-wrap items-center justify-end bg-transparent">
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src="/logo70x70.png"
      alt="File icon"
      width={20}
      height={20}
      className="h-6 w-auto invert opacity-50 transition-opacity duration-300 group-hover:opacity-100"
    />
    <span className="hover:text-gray-300">Fanshop</span>
  </a>
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      className="invert"
      src="/window.svg"
      alt="Window icon"
      width={16}
      height={16}
    />
    <span className="hover:text-gray-300">Support</span>
  </a>
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      className="invert"
      src="/file.svg"
      alt="Globe icon"
      width={16}
      height={16}
    />
    <span className="hover:text-gray-300">Impressum</span>
  </a>
</footer>
    </div>
  );
}