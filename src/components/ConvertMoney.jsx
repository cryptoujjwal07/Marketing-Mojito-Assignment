import { useEffect, useState } from "react";
function ConvertMoney({ total }) {
  const [rates, setRates] = useState({});
  const [currency, setCurrency] = useState("INR");

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/INR")
      .then((res) => res.json())
      .then((data) => setRates(data.rates))
      .catch((err) => console.log("Error:", err));
  }, []);
  const converted = rates[currency]
    ?(total * rates[currency]).toFixed(2)
    :total;
  return (
    <div>
      <h2>Convert Currency</h2>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <p>
        Converted Total: {currency} {converted}
      </p>
    </div>
  );
}
export default ConvertMoney;