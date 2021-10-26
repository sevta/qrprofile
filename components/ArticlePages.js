/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ArticlePages({ articles }) {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Teras Rumah
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
          {articles?.map((article, index) => (
            <Link key={index} passHref href={`/journey/${article.slug}`}>
              <div className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative cursor-pointer">
                <img
                  src={`http://localhost:1337${article.image.url}`}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />

                <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

                <div className="relative p-4 mt-auto">
                  <span className="block text-gray-200 text-sm">
                    July 19, 2021
                  </span>
                  <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">
                    {article.title}
                  </h2>

                  <span className="text-indigo-300 font-semibold">
                    Read more
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
