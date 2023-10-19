import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const services = {
  lesson_plans: {
    title: "Effortlessly Plan, Manage, and Elevate",
    subtitle: "Search about the best way to present a particular topic",
    image_url:
      "https://img.freepik.com/free-photo/woman-writing-planning-business-strategy_53876-26330.jpg?w=740&t=st=1697662781~exp=1697663381~hmac=cc68b59b818264ff118e21b699f14c0fcd76038dffb073ced5eb70747614f04c",
  },
  doubt_clearance: {
    title: "Doubt Clearance",
    subtitle: "If You Have Any Doubts, Ask Any Doubt, Ask Anything",
    image_url:
      "https://c0.wallpaperflare.com/preview/271/294/543/advice-answer-ask-assistance.jpg",
  },
  multiple_choice_questions: {
    title: "Multiple Choice Questions",
    subtitle: "Create Questions with multiple choices of answers",
    image_url:
      "https://media.istockphoto.com/id/1502704339/photo/adult-man-using-a-laptop-tick-correct-sign-mark-for-document-approval-and-checklist-planning.webp?b=1&s=170667a&w=0&k=20&c=onQGCyDK6JclNctme0DNY2OYJwsvijBpd-YgwMfLDOc=",
  },
  essay: {
    title: "Create a well-structured Essay",
    subtitle:
      "Your Instant Essay Writer – Transforming Ideas into Polished Essays",
    image_url:
      "https://www.gamespace.com/wp-content/uploads/2023/08/still-life-with-inkwell-4782376_1920-1024x683.jpg",
  },
  poetry: {
    title: "A Poetry Writing Adventure",
    subtitle:
      "Crafting Verses from Your Imagination – Poetry at Your Fingertips",
    image_url:
      "https://images.unsplash.com/photo-1533271802434-53997a5f9e6c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  skit: {
    title: "Write a few lines of a Skit",
    subtitle:
      "Unleash Your Creativity – Instant Skit Scripts for Every Occasion",
    image_url:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  interesting_facts: {
    title: "Interesting Facts",
    subtitle: "Search about interesting facts",
    image_url:
      "https://images.unsplash.com/photo-1545238554-355a578ea010?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

const Description = () => {
  const router = useRouter();
  const [content, setContent] = useState(services.lesson_plans || {});
  useEffect(() => {
    const topic = router?.query?.topic;
    if (topic) {
      setContent(services[topic]);
    }
  }, [router]);
  console.log(router.query);
  return (
    <div className="flex flex-wrap justify-between gap-1 max-w-[1200px] m-auto mb-10">
      <div className="text-center w-full md:w-[calc(100%-310px)] lg:w-[calc(100%-410px)] md:px-10 py-4 md:py-20 flex flex-col align-middle lg:h-[400px]">
        <h1 className="font-extrabold text-4xl md:text-4xl lg:text-6xl text-gray-100 lg:pt-10">
          {content?.title}
        </h1>
        <h3 className="font-semibold text-md md:text-xl py-4 md:px-16 text-gray-200">
          {content?.subtitle}
        </h3>
      </div>
      {/* [-6px_7px_19px_0px_#1C2833] */}
      <div className="w-full flex align-middle md:w-[300px] lg:w-[400px] overflow-hidden shadow-[-6px_7px_19px_0px_#17202A]">
        <img
          src={content?.image_url}
          alt={content?.title}
          className="w-full aspect-square object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default Description;
