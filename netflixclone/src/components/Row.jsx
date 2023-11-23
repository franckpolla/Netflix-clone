import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import { FaHeart, FaRegheart } from "react-icons/fa";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await axios.get(props.fetchURL);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fecthData();
  }, [props.fetchURL]);

  console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4"> {props.title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((item, id) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80  hover:opacity-100 text-white opacity-0">
                <p className="white-space-normal t text-xs md:text-sm font-bold items-center h-full text-center flex justify-center">
                  {item?.title}
                </p>
                {/* <p>{like ? <FaHeart /> : <FaRegheart />}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
