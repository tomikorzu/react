export default function CounterComp({ variants, children }) {
  return <span className={variants}>{children}</span>;
}
