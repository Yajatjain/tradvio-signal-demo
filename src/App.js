import React, { useState, useEffect } from 'react';

const mockSignals = [
  {
    symbol: "BANKNIFTY",
    type: "BUY",
    entry: 49750,
    sl: 49500,
    target: 50200,
    time: "10:45 AM"
  },
  {
    symbol: "RELIANCE",
    type: "SELL",
    entry: 2880,
    sl: 2905,
    target: 2830,
    time: "11:30 AM"
  }
];

function App() {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    setSignals(mockSignals);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📊 Tradvio-Style Signal Dashboard</h1>
      <div className="mb-8">
        <iframe
          src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22NSE%3ABANKNIFTY%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22400%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%7D"
          width="100%"
          height="400"
          frameBorder="0"
          allowTransparency="true"
          scrolling="no"
        ></iframe>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {signals.map((signal, index) => (
          <div key={index} className="rounded-xl border shadow-md p-4 bg-white">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{signal.symbol}</h2>
              <span className={`text-sm font-bold ${signal.type === 'BUY' ? 'text-green-600' : 'text-red-500'}`}>{signal.type}</span>
            </div>
            <p className="text-sm">Entry: ₹{signal.entry}</p>
            <p className="text-sm">Stop Loss: ₹{signal.sl}</p>
            <p className="text-sm">Target: ₹{signal.target}</p>
            <p className="text-xs text-gray-500 mt-2">Time: {signal.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;