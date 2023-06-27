import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.scss";

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating">
      <CircularProgressbar
        value={rating}
        maxValue={100}
        text={`${rating}%`}
        background
        backgroundPadding={5}
        strokeWidth={7}
        styles={buildStyles({
          textSize: "26px",

          pathColor: rating < 50 ? "red" : rating < 70 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default CircleRating;
