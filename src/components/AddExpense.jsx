import {useState} from "react"; 
function AddExpences({onAdd}){
    const [title , setTitle]= useState("");
    const [amount, setAmount]= useState("");
    const [category, setCategory] = useState("");

    function submitHandler(e){
        e.preventDefault();
        if(!title || !amount)return;

        const data = {
            id: Date.now(),
            title: title,
            amount: Number(amount),
            category:category
        };
        onAdd(data);
        setTitle("");
        setAmount("");
        setCategory("");
    }
    return(
        <div>
            <h2>Add Expense</h2>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Enter item"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Other">Other</option>
                </select>
                
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
export default AddExpences;