interface props {
  count: number;
}
function Number(props: props) {
  return <h1 className="currentCount">{props.count}</h1>;
}
export default Number;
