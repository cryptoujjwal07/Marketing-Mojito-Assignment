function ShowExpenses({items,onDelete}){
    if(items.length == 0){
        return <p>No Expenses Added</p>;
    }
    return(
        <div>
            <h2>All Expenses</h2>
            {items.map((item)=>(
               <div key={item.id}>
                <p>
                    {item.title} - ₹{item.amount} ({item.category})
                </p>
                <button onClick={() => onDelete(item.id)}>
                    Delete
                </button>
               </div> 
            ))}
        </div>
    );
}
export default ShowExpenses;