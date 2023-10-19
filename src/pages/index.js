import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Penguin AI</title>
        <meta name="description" content="Penguin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <nav className="dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
              <img
                src="/happy-penguin.png"
                className="h-16 mr-8 md:ml-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-4xl font-semibold whitespace-nowrap text-white dark:text-white">
                Penguin AI
              </span>
            </a>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <img
                src="https://www.vizuara.com/Vizlogo.gif"
                className="h-12 md:mr-8"
                alt="Flowbite Logo"
              />
            </div>
          </div>
        </nav>

        <div>
          <div className="mt-20 my-2 mx-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-10 xl:gap-x-8">
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
              <h3 className="text-2xl font-semibold text-center text-black">
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
                router.push("/lessonplan?topic=lesson_plans");
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
                <h3 className="text-2xl font-semibold text-center text-black">
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
                router.push("/lessonplan?topic=doubt_clearance");
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
                <h3 className="text-2xl font-semibold text-center text-black">
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
                router.push("/lessonplan?topic=multiple_choice_questions");
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
                <h3 className="text-2xl font-semibold text-center text-black">
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
                router.push("/lessonplan?topic=essay");
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
                <h3 className="text-2xl font-semibold text-center text-black">
                  Essay
                </h3>
                <p className="mt-2 text-base text-black text-center">
                  Create a well-structured essay
                </p>
              </div>
            </div>
            <div
              className="group relative shadow-md rounded-md bg-slate-200"
              onClick={() => {
                router.push("/lessonplan?topic=poetry");
              }}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://images.unsplash.com/photo-1533271802434-53997a5f9e6c?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070"
                  alt="Lesson Plans"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 px-4 pb-4">
                <h3 className="text-2xl font-semibold text-center text-black">
                  Poetry
                </h3>
                <p className="mt-2 text-base text-black text-center">
                  A Poetry Writing Adventure
                </p>
              </div>
            </div>
            <div
              className="group relative shadow-md rounded-md bg-slate-200"
              onClick={() => {
                router.push("/lessonplan?topic=skit");
              }}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://img.freepik.com/free-vector/male-female-artists-playing-stage-front-audience-cartoon-performers-evening-dresses-singing-drama-song-flat-illustration_74855-18402.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697328000&semt=ais"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 px-4 pb-4">
                <h3 className="text-2xl font-semibold text-center text-black">
                  Skit
                </h3>
                <p className="mt-2 text-base text-black text-center">
                  Write a few lines of a Skit
                </p>
              </div>
            </div>
            <div
              className="group relative shadow-md rounded-md bg-slate-200"
              onClick={() => {
                router.push("/lessonplan?topic=interesting_facts");
              }}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1822"
                  alt="Lesson Plans"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 px-4 pb-4">
                <h3 className="text-2xl font-semibold text-center text-black">
                  Interesting Facts
                </h3>
                <p className="mt-2 text-base text-black text-center">
                  Search about interesting facts
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
