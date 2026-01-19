interface props {
  increment: VoidFunction;
  decrement: VoidFunction;
  reset: VoidFunction;
}
function Buttons(props: props) {
  return (
    <div className="buttonGroup">
      <button className="countButtons increment" onClick={props.increment}>
        Increment
      </button>
      <button className="countButtons reset" onClick={props.reset}>
        Reset
      </button>
      <button className="countButtons decrement" onClick={props.decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Buttons;
