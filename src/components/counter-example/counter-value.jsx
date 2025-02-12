import { useSelector } from "react-redux";

function CounterValue() {
  const state = useSelector((state) => state);
  const { countValue } = {count:{countValue:}}

  return <p>Counter value is {state.count.countValue}</p>;
}

export default CounterValue;