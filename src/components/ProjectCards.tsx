"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  isFeatured: boolean;
  url: string;
}

function ProjectCards() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  const handleViewClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Projects
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="m-4">
                  <Image
                    src={course.image}
                    alt={course.title}
                    height={350}
                    width={350}
                    className="object-contain"
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <div>
                    <p className="text-lg sm:text-xl text-black mb-2 dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {course.description}
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => handleViewClick(course.url)}
                      className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                      View
                    </button>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            View All Projects
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCards;
