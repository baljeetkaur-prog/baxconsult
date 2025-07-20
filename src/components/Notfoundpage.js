import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Themecontext } from "./Themecontext";

const Notfoundpage = () => {
  const navigate = useNavigate();
  const { theme } = useContext(Themecontext);
  const isDark = theme === "dark";

  const pageStyles = {
    backgroundColor: isDark ? "#0d1117" : "#f4f6f9",
    color: isDark ? "#eaeaea" : "#212121",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem 1.5rem",
    textAlign: "center",
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    transition: "all 0.4s ease",
  };

  const iconStyle = {
    fontSize: "6rem",
    color: isDark ? "#f44336" : "#d32f2f",
    marginBottom: "1.5rem",
    animation: "pulse 1.5s infinite",
  };

  const headingStyle = {
    fontSize: "2.2rem",
    fontWeight: "800",
    margin: "0.2rem 0 0.5rem",
    letterSpacing: "0.5px",
  };

  const descriptionStyle = {
    maxWidth: "500px",
    fontSize: "1.05rem",
    color: isDark ? "#bdbdbd" : "#555",
    lineHeight: 1.7,
    marginBottom: "2rem",
    padding: "0 1rem",
  };

  const buttonStyle = {
    backgroundColor: isDark ? "#f44336" : "#007bff",
    color: "#fff",
    border: "none",
    padding: "0.7rem 1.6rem",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "6px",
    cursor: "pointer",
    boxShadow: isDark
      ? "0 4px 10px rgba(255, 255, 255, 0.1)"
      : "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
  };

  const buttonHoverStyle = {
    backgroundColor: isDark ? "#d32f2f" : "#0056b3",
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, buttonHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, buttonStyle);
  };

  return (
    <div style={pageStyles}>
      <div style={iconStyle}>
        <i className="fas fa-unlink"></i>
      </div>
      <h2 style={headingStyle}>Sorry, the page was not found</h2>
      <p style={descriptionStyle}>
        The link you followed may be broken or the page might have been
        removed.
      </p>
      <button
        style={buttonStyle}
        onClick={() => navigate("/")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fas fa-home" style={{ marginRight: "6px" }}></i> Return to Homepage
      </button>
    </div>
  );
};

export default Notfoundpage;
