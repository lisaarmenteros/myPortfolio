import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import SanityBlockContent from "@sanity/block-content-to-react";
// import flower from "../images/flower.jpeg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name, 
            bio, 
            "authorImage": image.asset->url,
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative min-h-screen bg-blue-100">
      {/*<img src={flower} alt="flower" className="absolute w-full" />*/}
      <div className="p-10 container mx-auto relative lg:pt-20">
        <section className="bg-black rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-lg w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="monospace text-6xl text-blue-300 mb-4">
              Hey there. I'm{" "}
              <span className="text-blue-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white monospace">
              <SanityBlockContent
                blocks={author.bio}
                projectId="stcz81fx"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
