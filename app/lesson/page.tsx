"use client";

import Lesson from "./lesson.mdx";

const LessonPage = () => {
  return (
    <main className="w-full flex justify-center">
      <div className="flex flex-col max-w-[696px]">
        <Lesson />
      </div>
    </main>
  );
};

export default LessonPage;
