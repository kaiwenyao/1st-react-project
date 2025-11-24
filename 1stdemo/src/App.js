import { useEffect, useState } from "react";
// 项目的根组件
const URL = "http://geek.itheima.net/v1_0/channels";


function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    // 操作
    async function getList() {
      const res = await fetch(URL);
      const jsonRes = await res.json();
      console.log(jsonRes);
      setList(jsonRes.data.channels);
    }
    getList();
  }, []);
  return (
    <div>
      this is an app
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              {" "}
              {item.id} &gt; {item.name}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
