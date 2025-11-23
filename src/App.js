// 项目的根组件
const list = [
  { id: 1001, name: "vue" },
  { id: 1002, name: "react" },
  { id: 1003, name: "Angular" },
];
function App() {
  return (
    <div className="App">
      This is app.
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
