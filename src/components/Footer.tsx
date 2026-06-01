export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      © {year} EΛSXIN — Built with care, shipped with intent.
    </footer>
  );
}
