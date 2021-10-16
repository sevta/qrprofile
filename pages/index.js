import { useEffect } from "react";

export default function Homepage({ journeys }) {
  useEffect(() => {
    console.log("the data from props", journeys);
  }, []);

  return (
    <div className="max-w-2xl mx-auto h-screen p-5">
      <div className="font-semibold text-2xl mb-10">Agressa</div>
      <div className="space-y-5">
        {journeys.map((journey, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-400 pl-5 cursor-pointer hover:bg-gray-100 transition duration-150 py-2"
          >
            <div className="text-lg font-semibold -mt-1">{journey.title}</div>
            <div className="text-sm text-gray-400">
              created by {journey.createdBy.name}
            </div>
            <div className="text-xs mt-1 text-gray-400">
              {journey.createdAt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const URL =
    "https://api-ap-northeast-1.graphcms.com/v2/ckuu49t4b17fc01z71mvf6d59/master";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
  {
    journeys {
      title
      createdAt
      updatedAt
      createdBy {
        id
        name
        picture
      }
      content {
        markdown
      }
    }
  }      
  `,
    }),
  };

  const resp = await fetch(URL, options);
  const {
    data: { journeys },
  } = await resp.json();

  return {
    props: {
      journeys,
    },
  };
}
