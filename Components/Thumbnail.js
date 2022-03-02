import Image from "next/image";
import {ThumbUpIcon} from '@heroicons/react/outline';


function Thumbnail({result}) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className="group cursor-pointer">
        <Image
            layout="responsive"
            src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.backdrop_path}`}
            height={1080}
            width={1920}
        />
        <div className="p-2 font-bold">
            <p className="truncate max-w-md">{result.overview}</p>
            <h2 className="mt-1 text-3xl text-teal-400 transition-all duration-100 ease-in-out font-bold">{result.title || result.original_name}</h2>
            <p className="flex items-center"> 
            {result.release_date || result.first_air_date} . {" "}
            <ThumbUpIcon className="h-5 mx-2"/> {result.vote_count}</p>
        </div>
    </div>
  )
}

export default Thumbnail