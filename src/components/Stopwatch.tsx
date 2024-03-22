import { useSelector, useDispatch } from "react-redux";
import { start, tick, stop, reset } from "../features/time";
import { useEffect } from "react";
import "./stopWatch.css";

function Clock() {
  const time = useSelector((state) => state.time);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!time.isOn) {
      return;
    }
    const timer = setInterval(() => {
      dispatch(tick());
    }, 100);
    return () => clearInterval(timer);
  }, [dispatch, time]);

  console.log(time);
  return (
    <div className="sw-container">
      <h1>Stop Watch</h1>
      <p className="timeDisplay">
        H:{time.hours} : M: {time.minutes} : S:{time.seconds}
      </p>
      <div className="btn-container">
        <button
          className="startBtn"
          onClick={() => dispatch(start())}
        >
          Start
        </button>
        <button className="stopBtn" onClick={() => dispatch(stop())}>
          Stop
        </button>
        <button
          className="resetBtn"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default Clock;