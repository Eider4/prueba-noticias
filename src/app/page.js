"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [resp, setResp] = useState([]);
  function LlamarApi() {
    const apiKey = "f275d0810b0b44d6ae306d7e485d64cd";

    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setResp(data.articles);
      });
  }

  useEffect(() => {
    LlamarApi();
  }, []);

  return (
    <div>
      <header className="">
        <h1 className="font-bold text-7xl">Tu noticiero</h1>
      </header>
      <div className="flex flex-wrap gap-5 ">
        {resp.map((noticia, i) => {
          return (
            <div
              key={i}
              className="max-w-[600px] border border-gray-300 rounded-xl overflow-hidden font-sans shadow-lg"
            >
              <img
                src={noticia.urlToImage}
                alt={noticia.title}
                className="w-full"
              />

              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{noticia.title}</h2>

                <p className="text-gray-600 mb-3">{noticia.description}</p>

                <p className="text-sm">
                  <strong>Autor:</strong> {noticia.author}
                </p>

                <p className="text-sm">
                  <strong>Fuente:</strong> {noticia.source.name}
                </p>

                <p className="text-sm">
                  <strong>Fecha:</strong>{" "}
                  {new Date(noticia.publishedAt).toLocaleDateString()}
                </p>

                <a
                  href={noticia.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Leer noticia
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
