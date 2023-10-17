import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <main className="p-2">
      <div className="p-2">
        <h1 className="text-3xl font-semibold text-center dark:text-white">
          Penguin AI
        </h1>
      </div>
      <div>
        <div className="mt-6 my-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-10 xl:gap-x-8">
          <div
            className="group relative shadow-md rounded-md"
            onClick={() => {
              router.push("/lessonplan");
            }}
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1564144006388-615f4f4abb6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Lesson Plans"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 px-3 pb-4">
              <h3 className="text-xl font-semibold text-center text-gray-700">
                Lesson Plans
              </h3>
              <p className="mt-1 text-base text-gray-500">
                Search about the best way to present a particular topic
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
