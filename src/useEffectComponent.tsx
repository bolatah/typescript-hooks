import React, { useState, useEffect } from "react";

export default function UseEffectComponent() {
  const [value, setvalue] = useState(1);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setvalue((v) => v + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return <div>{value}</div>;
}
