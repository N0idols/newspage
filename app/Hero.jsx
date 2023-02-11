export default async function Hero() {
  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`
  );

  const res = await data.json();
  const articles = res.articles;

  function shorten(text, max) {
    return text && text.length > max
      ? text.slice(0, max).split(" ").slice(0, -1).join(" ")
      : text;
  }

  function renderSwitch(i) {
    switch (i) {
      case 5:
        return "01";
      case 6:
        return "02";
      case 7:
        return "03";
      default:
        return "01";
    }
  }

  return (
    <>
      <div className="flex">
        <div className="w-2/3">
          <img
            src={articles[0].urlToImage}
            className="w-full h-72 object-cover"
          />
          {/* <Image src={articles[0].urlToImage} width={730} height={500} /> */}

          <div className="my-4 grid grid-cols-2 gap-8 p-3">
            <div>
              <h1 className="text-6xl font-extrabold">
                {shorten(articles[0].title, 30)}
              </h1>
            </div>

            <div className="flex  flex-col justify-evenly">
              <p className="font-light leading-6 tracking-wider">
                {articles[0].description}
              </p>
              <button className="mt-4 w-2/3 bg-[#F15D51] p-4 font-semibold uppercase tracking-widest text-white">
                {" "}
                read more
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-[#00001A] p-6 w-1/3 flex flex-col ">
          <div className="h-full flex flex-col justify-evenly">
            <h1 className="text-4xl font-bold text-[#E9AA52] ">New</h1>

            {articles.map((article, i) => {
              let text = article.description;

              if (i < 4 && i !== 0) {
                return (
                  <div className="space-y-2">
                    <h1 className="font-bold tracking-wide text-white text-xl ">
                      {shorten(article.title, 50)}
                    </h1>

                    <p className="font-light leading-6 tracking-wider text-white">
                      {shorten(text, 75)}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        {articles.map((article, i) => {
          let text = article.description;
          if (i > 4 && i < 8) {
            return (
              <div className="flex ">
                <img src={article.urlToImage} className="w-20 object-cover" />
                <div className="flex flex-col p-2 ml-2 space-y-2">
                  <h1 className="text-3xl font-bold text-gray-400">
                    {renderSwitch(i)}
                  </h1>
                  <h1 className="font-bold tracking-wide text-lg ">
                    {shorten(article.title, 20)}
                  </h1>
                  <p className="font-light leading-6 tracking-wider">
                    {shorten(text, 60)}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
