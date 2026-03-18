function SummaryCard({ items }) {
  const total = items.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  // Category-wise total
  const categoryTotal = {};

  items.forEach((item) => {
    if (!categoryTotal[item.category]) {
      categoryTotal[item.category] = 0;
    }
    categoryTotal[item.category] += item.amount;
  });
  return(
    <div>
      <h2>Total Spent</h2>
      <p>₹ {total}</p>
      <h3>Category Summary</h3>
      {Object.keys(categoryTotal).map((cat) => (
        <p key={cat}>
          {cat}: ₹{categoryTotal[cat]}
        </p>
      ))}
    </div>
  );
}
export default SummaryCard;