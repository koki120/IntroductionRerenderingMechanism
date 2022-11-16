import "./styles.css";
import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "../ChildArea";

export default function App() {
  const [text, setText] = useState("");

  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  //アロー関数はそれを定義したコンポーネントがレンダリングされるたびに”新しく生成される”と判定される
  //そのため、アロー関数をpropsで渡している場合、memoを使っても親コンポーネントがレンダリングされるたび子もレンダリングされる

  //useCallbackを使うことで第二引数の[]の中の値が更新されるときに限り、アロー関数が再生成されるようになる。
  //第二引数の[]が空の場合再生成はしない。

  const onClickClose = useCallback(() => setOpen(false), []);

  //useMemoは変数自体のmemo化
  const number = useMemo(() => 1 + 3, []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea number={number} open={open} onClickClose={onClickClose} />
    </div>
  );
}
