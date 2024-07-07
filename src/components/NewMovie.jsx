import CardDescription from "./CardDescription"

const NewMovie = () => {
  const movieImages = [
    "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-07.webp",
    "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-06.webp",
    "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-07.webp",
    "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-04.webp",
    "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-07.webp",
    "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-07.webp",
  ];

  return (
    <div className='new_movie_container text-white mt-16 mb-96'>
      <div className='font-semibold mb-1 px-0 sm:px-1 text-xl'>New Movie 2024</div>
      <div className="container justify-center">
        <div className="flex flex-wrap justify-between -mx-5">
          {movieImages.map((src, index) => (
             <div key={index} className="new_movie_card new_movie_block relative">
             <div className="rounded-lg p-4">
               <img className="rounded-sm w-full new_movie_img" src={src} alt={'movie'} />
               <CardDescription />
             </div>
           </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default NewMovie
