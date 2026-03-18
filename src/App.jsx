import {useState,useEffect} from "react";
import AddExpense from "./components/AddExpense";
import ShowExpenses from "./components/ShowExpenses";
import SummaryCard from "./components/SummaryCard";
import ConvertMoney from "./components/ConvertMoney";

function App() {
  const [expenses,setExpenses]= useState([]);
  const [search,setSearch] = useState("");
  //load to local storage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("expenses"));
    if (saved && Array.isArray(saved)) {
      setExpenses(saved);
    }
  }, []);
  //save to local storage
  useEffect(() => {
  if (expenses.length > 0) {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
}, [expenses]);

  function addItem(data) {
    setExpenses((prev) => [data, ...prev]);
  }
  function deleteItem(id) {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  }
  //total
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);
  //search 
  const filtered = expenses.filter((item) =>
    (item.title || "").toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="container"> 
      <h1>💸 Expense Tracker</h1>
      <h5>Built by - Ayushman Gupta</h5>
      <h6>Assignment by - Marketing Mojito</h6>
      <AddExpense onAdd={addItem}/>
      <SummaryCard items={expenses}/>
      <ConvertMoney total={total}/>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ShowExpenses items={filtered} onDelete={deleteItem}/>
    </div>
  );
}
export default App;