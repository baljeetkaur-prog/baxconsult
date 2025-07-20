import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Themecontext } from "./Themecontext";

const Header = () => {
  const { theme, toggleTheme } = useContext(Themecontext);

  return (
    <header
      id="site-header"
      className="fixed-top"
      style={{
        backdropFilter: "blur(16px)",
        backgroundColor:
          theme === "dark" ? "rgba(30, 30, 30, 0.8)" : "rgba(255, 255, 255, 0.85)",
        borderBottom:
          theme === "dark"
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid rgba(0, 0, 0, 0.07)",
        transition: "all 0.4s ease",
        boxShadow:
          theme === "dark"
            ? "0 4px 20px rgba(0,0,0,0.5)"
            : "0 4px 20px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light d-flex align-items-center justify-content-between">
          <NavLink
            className="navbar-brand d-flex align-items-center"
            to="/"
            style={{
              gap: "14px",
              textDecoration: "none",
            }}
          >
            <img
              src="/images/mainlogo.png"
              alt="Company Logo"
              style={{
                height: "68px",
                borderRadius: "14px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
              <span
                style={{
                  fontSize: "1.7rem",
                  fontWeight: 800,
                  letterSpacing: "1.5px",
                  color: theme === "dark" ? "#ffffff" : "#121212",
                  fontFamily: "'Cinzel', serif",
                  textShadow:
                    theme === "dark"
                      ? "0 1px 3px rgba(255,255,255,0.1)"
                      : "0 1px 2px rgba(0,0,0,0.08)",
                  transition: "color 0.3s ease",
                }}
              >
                BAX Consulting
              </span>
              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: theme === "dark" ? "#cccccc" : "#444444",
                  fontFamily: "'Poppins', sans-serif",
                  opacity: 0.85,
                  transition: "color 0.3s ease",
                }}
              >
                Group
              </span>
            </div>
          </NavLink>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ gap: "18px" }}
            >
              {["/", "/about", "/services", "/contact"].map((path, i) => {
                const names = ["Home", "About", "Services", "Contact"];
                return (
                  <li className="nav-item" key={i}>
                    <NavLink
                      to={path}
                      end={path === "/"}
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      style={{
                        fontWeight: 500,
                        fontSize: "1.05rem",
                        color: theme === "dark" ? "#eee" : "#333",
                        padding: "6px 14px",
                        borderRadius: "6px",
                        transition: "all 0.3s",
                      }}
                    >
                      <span className="nav-text">{names[i]}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Theme Toggle */}
          <div className="theme-switch-wrapper ms-3">
            <label className="theme-switch" htmlFor="checkbox" style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                id="checkbox"
                onChange={toggleTheme}
                checked={theme === "dark"}
                style={{ display: "none" }}
              />
              <div
                className="mode-container"
                style={{
                  width: "46px",
                  height: "26px",
                  background: theme === "dark" ? "#444" : "#ddd",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: theme === "dark" ? "flex-end" : "flex-start",
                  padding: "3px",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    height: "18px",
                    width: "18px",
                    borderRadius: "50%",
                    background: theme === "dark" ? "#fdd835" : "#333",
                    boxShadow:
                      theme === "dark"
                        ? "0 0 4px #fdd835"
                        : "0 0 3px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease",
                  }}
                ></div>
              </div>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
