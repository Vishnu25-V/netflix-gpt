import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer=(movie_id)=>{
    const dispatch= useDispatch();
    //Fetch trailer video and updating the store with  trailer video
    const getMovieTrailer=async ()=>{
    const data= await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?`, API_OPTIONS)
    const json= await data.json();
    console.log(json);
    if (!json.results) return;

const filterData= json.results.filter(video=>video.type==="Trailer")
const trailer= filterData.length? filterData[0]:json.results[0];
console.log(trailer);
dispatch(addTrailerVideo(trailer));

}
useEffect(()=>{
     if (movie_id) getMovieTrailer();
},[])

}
export default useMovieTrailer;