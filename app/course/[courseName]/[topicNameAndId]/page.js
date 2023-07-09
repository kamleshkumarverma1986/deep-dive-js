async function getTopic1(topicId) {
  const response = await fetch(
    `http://openlibrary.org/search.json?q=kaka&page=${topicId}`,
    {
      cache: "no-store",
      // pure SSR (no caching)
    }
  );
  return await response.json();
}

async function getTopic2(topicId) {
  const response = await fetch(
    `http://openlibrary.org/search.json?q=kaka&page=${topicId}`
  );
  // by default, full caching.. called as SSG (Static Site Generation)
  return await response.json();
}

async function getTopic3(topicId) {
  const response = await fetch(
    `http://openlibrary.org/search.json?q=kaka&page=${topicId}`,
    {
      next: {
        revalidate: 5, // 5 sec
      },
      // Inremental Static Generation (ISR) (combination of SSR and SSG)
    }
  );
  return await response.json();
}

export async function generateMetadata({
  params: { courseName, topicNameAndId },
  searchParams,
}) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    title: courseName,
    description: topicNameAndId,
  };
}

const Topic = async ({ params: { courseName, topicNameAndId } }) => {
  const topicData = await getTopic3(topicNameAndId);
  return (
    <div>
      <h1> This is the Topic component </h1>
      <h2>Course Name: {courseName}</h2>
      <h2>Topic Name: {topicNameAndId}</h2>
      <div>
        {topicData.docs.map((doc) => {
          return <li key={doc.key}>{doc.title}</li>;
        })}
      </div>
    </div>
  );
};

export default Topic;
