import SingleReview from "./SingleReview";

const Reviews = () => {
  const reviews = [
    {
      name: "Aatmane Oulmouden",
      title: "Frontend developer",
      comment:
        "This product has significantly improved our team's workflow efficiency. The user-friendly interface and robust features are exactly what we needed. Highly recommend to anyone in the industry.",
      numOfStars: 5,
      imgUrl: "./aatmane.jpg",
    },
    {
      name: "Emily Johnson",
      title: "UX Designer",
      comment:
        "The design and functionality are top-notch. However, the learning curve was steeper than expected. Once you get the hang of it, it's a fantastic tool for design and development collaboration.",
      numOfStars: 4,
      imgUrl: "./emily.jpg",
    },
    {
      name: "John Smith",
      title: "Software Engineer",
      comment:
        "A solid tool with some great features. It has some bugs that need fixing, but overall it has been very useful for our projects. Customer support is responsive and helpful.",
      numOfStars: 3,
      imgUrl: "./john.jpg",
    },
  ];

  return (
    <div className="reviews-wrapper grid grid-cols-1 gap-y-24 mt-24 lg:gap-x-8 lg:grid-cols-3">
      {reviews.map((review, index) => (
        <SingleReview
          key={index}
          name={review.name}
          title={review.title}
          comment={review.comment}
          stars={review.numOfStars}
          image={review.imgUrl}
        />
      ))} 
    </div>
  );
};

export default Reviews;
