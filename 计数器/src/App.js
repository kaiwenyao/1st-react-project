import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addToNum } from "./store/modules/counterStore";
import { fetchChannelList } from "./store/modules/channelStore";
function App() {
  const { count } = useSelector((state) => state.counter);
  const { pindaoliebiao } = useSelector((state) => state.pindao);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);
  return (
    <div className="App">
      <button onClick={() => dispatch(addToNum(10))}> add to 10 </button>
      <button onClick={() => dispatch(decrement())}> 减少 </button>
      {count}
      <button onClick={() => dispatch(increment())}> 增加 </button>
      <button onClick={() => dispatch(addToNum(20))}> add to 20 </button>
      <ul>
        {pindaoliebiao.map((item) => (
          <li key={item.id}> {item.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
