 import React, { useState } from 'react';

function Counter() {
  //
  const [count, setCount] = useState(0);

  // 
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* */}
      {/*  */}
      <button onClick={incrementCount}>Sanabel Waleed - {count}</button>
    </div>
  );
}

export default Counter;
