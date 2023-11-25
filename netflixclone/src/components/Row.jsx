import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

function Row(props, { rowID }) {
  const [movies, setMovies] = useState([]);

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

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft += 500;
  };

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4"> {props.title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          onClick={slideLeft}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          onClick={slideRight}
        />
      </div>
    </div>
  );
}

export default Row;
