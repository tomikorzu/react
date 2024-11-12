export default function Button({ children, variants, action }) {
  return (
    <button className={variants} onClick={action}>
      {children}
    </button>
  );
}
