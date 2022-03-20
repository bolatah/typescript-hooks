import { useRef } from "react";

export default function useRefComponent() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return <input ref={inputRef} />;
}
