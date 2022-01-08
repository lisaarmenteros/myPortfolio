import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { useParams } from "react-router-dom";
import SanityBlockContent from "@sanity/block-content-to-react";

export default function SingleProject() {
  const [singleProject, setSingleProject] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title, 
        _id,
        slug, 
        mainImage{
            asset -> {
                _id,
                url,
            }
        },
        body, 
        date,
        place, 
        description, 
        projectType,
        link,
        tags,
    }`
      )
      .then((data) => setSingleProject(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleProject) return <div>Loading...</div>;

  return (
    <main className="bg-blue-100 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-white rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white shadow bg-opacity-75 rounded p-12">
              <h1 className="monospace text-3xl lg:text-6xl mb-4">
                {singleProject.title}
              </h1>
            </div>
            <div className="monospace text-black text-xs space-x-4 ml-3 shadow bg-white bg-opacity-75 p-2 ">
              <span>
                <strong className="font-bold ">Finished on</strong>:{" "}
                {new Date(singleProject.date).toLocaleDateString()}
              </span>
              <span>
                <strong className="font-bold">Company</strong>:{" "}
                {singleProject.place}
              </span>
              <span>
                <strong className="font-bold">Type</strong>:{" "}
                {singleProject.projectType}
              </span>
            </div>
          </div>
          <img
            src={singleProject.mainImage.asset.url}
            alt={singleProject.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-10 lg:px-48 py-12 lg:py-20 prose max-w-full monospace">
          <SanityBlockContent
            blocks={singleProject.body}
            projectId="stcz81fx"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}
