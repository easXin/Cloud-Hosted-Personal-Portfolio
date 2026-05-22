export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      © {year} Dengxin Wang — Built with React, TypeScript, and Vite.
    </footer>
  );
}
