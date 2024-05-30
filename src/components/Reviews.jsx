import SingleReview from "./SingleReview";
import ReviewsData from "../data.js";

const Reviews = () => {
  const reviews = ReviewsData.map((review, index) => (
    <SingleReview
      key={index}
      name={review.name}
      title={review.title}
      comment={review.comment}
      stars={review.numOfStars}
      image={review.imgUrl}
    />
  ));
  return (
    <div className="reviews-wrapper grid grid-cols-1 gap-y-24 mt-24 lg:gap-x-8 lg:grid-cols-3">
      {reviews}
    </div>
  );
};

export default Reviews;
