export default function TestPageLayout({ children }) {
  return (
    <div>
      <p>Mon texte dans le layout de page</p>
      {children}
    </div>
  );
}
