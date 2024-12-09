import { useState } from "react";
export interface Person {
  name: string;
  age: number;
  isMarried?: boolean;
}
let arr = Array.from({ length: 10 });
for (let i = 0; i < 5; i++) {
  arr[i] = i;
}
console.log(arr);
function Person(props: Person) {
  const [isShowInfo, SetIsShowInfo] = useState<boolean>(false);
  const [text, setText] = useState<string | null>(null);
  return (
    <>
      <p>
        The Erasmus Mundus Scholarship is a prestigious European Union-funded
        program that fully supports outstanding students from around the world
        to pursue joint master’s or doctoral degrees at leading European
        universities. It covers tuition, travel, living expenses, and insurance,
        offering a unique opportunity for academic excellence, cultural
        exchange, and international career development.
      </p>
      {isShowInfo && (
        <>
          <p>{text}</p>

          <div>Person </div>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <p>isMarried?: {props.isMarried ? "is Married" : "is Single"}</p>
        </>
      )}
      {Array.from({ length: 3 }).map((_, i) => (
        <>
          <input key={i} onChange={(e) => setText(e.target.value)} />
          <button key={i} onClick={() => SetIsShowInfo(!isShowInfo)}>
            Hide Info {i < 10 ? `0${i}` : i}
          </button>
        </>
      ))}
    </>
  );
}
export default Person;
