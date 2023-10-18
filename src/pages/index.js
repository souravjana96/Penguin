import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Penguin from '../../public/penguin.png'

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
          {/* <div
            className="group relative shadow-md rounded-md bg-slate-200"
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
            <div className="mt-4 px-4 pb-4">
              <h3 className="text-2xl font-semibold text-center text-gray-700">
                Ask a question
              </h3>
              <p className="mt-2 text-base text-black">
                Ask any valid question and get answer
              </p>
            </div>
          </div> */}
          <div
            className="group relative shadow-md rounded-md bg-slate-200"
            onClick={() => {
              router.push("/lessonplan");
            }}
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://t3.ftcdn.net/jpg/05/34/31/48/360_F_534314856_Wo4ap1TJ2nb72tcoENHEVJ8aJ2CAzP9Y.jpg"
                alt="Lesson Plans"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 px-4 pb-4">
              <h3 className="text-2xl font-semibold text-center text-gray-700">
                Lesson Plans
              </h3>
              <p className="mt-2 text-base text-black text-center">
                Search about the best way to present a particular topic
              </p>
            </div>
          </div>
          <div
            className="group relative shadow-md rounded-md bg-slate-200"
            onClick={() => {
              router.push("/lessonplan");
            }}
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/31/12/00/question-1015308_1280.jpg"
                alt="Lesson Plans"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 px-4 pb-4">
              <h3 className="text-2xl font-semibold text-center text-gray-700">
                Doubt Clearance
              </h3>
              <p className="mt-2 text-base text-black text-center">
                If You Have Any Doubts, Ask Any Doubt
              </p>
            </div>
          </div>
          <div
            className="group relative shadow-md rounded-md bg-slate-200"
            onClick={() => {
              router.push("/lessonplan");
            }}
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://site.surveysparrow.com/wp-content/uploads/2022/03/Copy-of-Blog-Banner-Templates-23-768x410.png"
                alt="Lesson Plans"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 px-4 pb-4">
              <h3 className="text-2xl font-semibold text-center text-gray-700">
                Multiple Choice Questions
              </h3>
              <p className="mt-2 text-base text-black text-center">
                Create Questions with multiple choices of answers
              </p>
            </div>
          </div>

          <div
            className="group relative shadow-md rounded-md bg-slate-200"
            onClick={() => {
              router.push("/lessonplan");
            }}
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXNzYXl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt="Lesson Plans"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 px-4 pb-4">
              <h3 className="text-2xl font-semibold text-center text-gray-700">
                Essay
              </h3>
              <p className="mt-2 text-base text-black text-center">
                Create a well-structured essay
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
