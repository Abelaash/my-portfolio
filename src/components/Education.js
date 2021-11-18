import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [educationData, setEducationData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "education"]{
          title,
          program,
          date,
          educationType
      }`
      )
      .then((data) => setEducationData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Education</h1>
        
        <section className="grid grid-cols-2 gap-8">
          {educationData &&
            educationData.map((education, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                    {education.title}
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                <span>
                    <strong className="font-bold">Program</strong>:{" "}
                    {education.program}
                  </span>
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(education.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Education Progress</strong>:{" "}
                    {education.educationType}
                  </span>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}