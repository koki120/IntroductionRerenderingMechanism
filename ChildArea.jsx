import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "red"
};

//reactは標準機能で親コンポーネントがレンダリングされたら、子もレンダリングするようになっている。
//memoをつけることでprposが変更しない限り再レンダリングされなくなる。

export const ChildArea = memo((props) => {
  console.log("rendering");
  const { number, open, onClickClose } = props;
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <p>{number}</p>
          <button onClick={onClickClose}>close</button>
        </div>
      ) : null}
    </>
  );
});
