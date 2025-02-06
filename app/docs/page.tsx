import Image from "next/image";

export default function Docs() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              “Cette page est un référentiel complet de la documentation du
              projet. Vous y trouverez une description détaillée des
              fonctionnalités implémentées, ainsi que des informations
              techniques et contextuelles.”
            </p>z
          </blockquote>
        </figure>
        <div className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex  gap-2 hover:underline hover:underline-offset-4 text-xl/8"
            href="https://gitlab.com/JimcoseyCode/fds-pointage-um"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={20}
              height={20}
            />
            Code source
          </a>
        </div>
      </main>
    </div>
  );
}
