import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import blackStar from "@/src/assets/icons/stars/blackStar.svg";
import greyStar from "@/src/assets/icons/stars/greyStar.svg";
import yellowStar from "@/src/assets/icons/stars/yellowStar.svg";

function ProductFullReviews() {
  const reviews = [
    {
      id: 1,
      text: "I absolutely love this red basic T-shirt! The fabric is super soft and breathable, making it comfortable to wear all day long. The color is vibrant and has stayed that way even after multiple washes. It’s also really versatile – I’ve dressed it up with a jacket for dinner and dressed it down for casual errands. The fit is true to size, and it doesn’t lose its shape. Highly recommend if you’re looking for a simple, well-made tee!",
      stars: 5,
      author: "Sarah",
      date: "November 11, 2024",
    },
    {
      id: 2,
      text: "This hoodie is so cozy and warm! Perfect for chilly evenings. The material is thick but not too heavy, and it has a great relaxed fit. I’ve been wearing it non-stop. The pockets are super handy, and I appreciate the quality of the stitching. Definitely a wardrobe staple for me!",
      stars: 4,
      author: "James",
      date: "October 25, 2024",
    },
    {
      id: 3,
      text: "The sneakers are stylish and surprisingly comfortable. I wore them for a long walk, and they didn’t hurt at all. The design is sleek and goes well with both casual and semi-formal outfits. The sole is durable, and the price point is just right. Great value for money!",
      stars: 5,
      author: "Emily",
      date: "September 14, 2024",
    },
    {
      id: 3,
      text: "The sneakers are stylish and surprisingly comfortable. I wore them for a long walk, and they didn’t hurt at all. The design is sleek and goes well with both casual and semi-formal outfits. The sole is durable, and the price point is just right. Great value for money!",
      stars: 5,
      author: "Emily",
      date: "September 14, 2024",
    },
    {
      id: 3,
      text: "The sneakers are stylish and surprisingly comfortable. I wore them for a long walk, and they didn’t hurt at all. The design is sleek and goes well with both casual and semi-formal outfits. The sole is durable, and the price point is just right. Great value for money!",
      stars: 5,
      author: "Emily",
      date: "September 14, 2024",
    },
    {
      id: 3,
      text: "The sneakers are stylish and surprisingly comfortable. I wore them for a long walk, and they didn’t hurt at all. The design is sleek and goes well with both casual and semi-formal outfits. The sole is durable, and the price point is just right. Great value for money!",
      stars: 5,
      author: "Emily",
      date: "September 14, 2024",
    },
    {
      id: 3,
      text: "The sneakers are stylish and surprisingly comfortable. I wore them for a long walk, and they didn’t hurt at all. The design is sleek and goes well with both casual and semi-formal outfits. The sole is durable, and the price point is just right. Great value for money!",
      stars: 5,
      author: "Emily",
      date: "September 14, 2024",
    },
  ];

  const progressData = [
    { rating: 5, percentage: 50 },
    { rating: 4, percentage: 30 },
    { rating: 3, percentage: 10 },
    { rating: 2, percentage: 7 },
    { rating: 1, percentage: 3 },
  ];

  return (
    <CardWrapper title="Product Reviews" className={styles.container}>
      {/* Reviews */}
      <div className={styles.reviewContainer}>
        <div className={styles.leftSide}>
          <div className={styles.singleReview}>
            <Image src={blackStar} alt="black star" width={21} height={21} />
            <Text fontSize={18} fontFamily="font500" color="grey900">
              4.0
            </Text>
          </div>
          <Text fontSize={16} fontFamily="font400" color="black">
            Based on 2.6k Reviews
          </Text>
          <div className={styles.starsContainer}>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <Image
                  key={_}
                  src={index < 4 ? blackStar : greyStar} // Change based on rating
                  alt={index < 4 ? "black star" : "grey star"}
                  width={24}
                  height={24}
                />
              ))}
          </div>
        </div>
        <div className={styles.rightSide}>
          {progressData.map((data) => (
            <div key={data.rating} className={styles.progressContainer}>
              <div className={styles.singleReview}>
                <Image
                  src={yellowStar}
                  alt={`${data.rating} stars`}
                  width={21}
                  height={21}
                />
                <Text fontSize={14} fontFamily="font500" color="black">
                  {data.rating}.0
                </Text>
              </div>
              <div className={styles.progressParent}>
                <div
                  className={styles.progressChild}
                  style={{
                    width: `${data.percentage}%`,
                  }}
                />
              </div>
              <Text fontSize={14} fontFamily="font500" color="black">
                {data.percentage}%
              </Text>
            </div>
          ))}
        </div>
      </div>

      {/* Comments */}
      <div className={styles.comments}>
        {reviews.map((comment) => (
          <CardWrapper key={comment.id} className={styles.commentContainer}>
            <Text fontSize={12} fontFamily="font400" color="grey900">
              {comment.text}
            </Text>
            <div className={styles.starContainer}>
              {Array(comment.stars)
                .fill(null)
                .map((_) => (
                  <Image
                    key={_}
                    src={blackStar}
                    alt="black star"
                    width={16}
                    height={16}
                  />
                ))}
            </div>
            <Text fontSize={11} fontFamily="font500" color="grey900">
              {comment.author} • {comment.date}
            </Text>
          </CardWrapper>
        ))}
      </div>
    </CardWrapper>
  );
}

export default ProductFullReviews;
