const SingleReview = ({ name, title, comment, stars, image }) => {
  return (
    <article className="bg-extra-white p-7 pt-16 rounded-xl shadow-xl text-center cursor-pointer group relative transition duration-150 ease-linear hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-full absolute -top-12 left-1/2 -translate-x-1/2"
      />
      <h2 className="text-xl font-semibold transition duration-150 ease-linear group-hover:text-hover">
        {name}
      </h2>
      <span className="text-base text-black/50 font-medium">{title}</span>
      <p className="mt-4 mb-5 text-black/80 min-h-32">{comment}</p>
      <div className="rating flex justify-center gap-1">
        {Array(stars)
          .fill()
          .map((_, index) => (
            <i className="star-icon fa-solid fa-star" key={index}></i>
          ))}
      </div>
    </article>
  );
};

export default SingleReview;
