import React, { useState } from "react";

export default function UseStateComponent() {
  const [arr, arrSet] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button onClick={() => arrSet([...arr, arr.length + 1])}>
          Add to array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => setName("jack")}>set name</button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
}
