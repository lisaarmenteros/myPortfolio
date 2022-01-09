import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title, 
          slug,
          date, 
          place, 
          description, 
          projectType,
          link,
          tags,
          mainImage{
            asset ->{
                _id,
                url
            },
            alt
        }
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-blue-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center monospace">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12 monospace">
          A collection of my projects
        </h2>
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projectData &&
            projectData.map((project, index) => (
              <Link
                to={"/project/" + project.slug.current}
                key={project.slug.current}
                className="relative rounded-lg shadow-xl p-16 bg-black"
                //key={index}
              >
                <h3 className="text-blue-300 text-lg font-bold px-3 py-4 monospace">
                  {project.title}
                </h3>
                <span className="block h-64 relative leading-snug">
                  <img
                    src={project.mainImage.asset.url}
                    alt={project.mainImage.alt}
                    className="w-full h-full object-cover rounded absolute"
                  />
                </span>
                <div className="text-gray-100 text-xs space-x-4 monospace">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-white leading-relaxed monospace">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
        </section>
      </section>
    </main>
  );
}
