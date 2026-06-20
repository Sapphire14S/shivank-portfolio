import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <p>
          © 2026 - {new Date().getFullYear()} Shivank Kumar.
          All rights reserved.
        </p>

      </div>

    </footer>
  );
}