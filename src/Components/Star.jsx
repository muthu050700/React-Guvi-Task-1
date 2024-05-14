import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
const Star = ({ count, stars, rating }) => {
  console.log(count, stars);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars > index + 1 ? (
          <FaStar className="icon" />
        ) : stars > number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  return (
    <wrapper>
      <div className="icon-style">
        <p>{rating}</p>
        <p>{ratingStar}</p>
      </div>
    </wrapper>
  );
};

export default Star;
