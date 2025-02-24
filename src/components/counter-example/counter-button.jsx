import { useDispatch } from "react-redux";
import { handleIncreaseCountAction } from "../../store/slices/counter";
import CounterValue from "./counter-value";

function CounterButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      handleIncreaseCountAction({
        id: 1,
        name: "Akhila",
      })
    );
  }
  return (
    <div>
            <h4>Redux Toolkit</h4>

      <button
        onClick={handleClick}
        style={{ backgroundColor: "black", color: "white", fontWeight: "bold" }}
      >
        Increase Count
      </button>

      <CounterValue />
    </div>
  );
}

export default CounterButton;
