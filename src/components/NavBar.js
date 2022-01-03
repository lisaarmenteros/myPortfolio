import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-pink-400">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className={(navData) =>
              navData.isActive
                ? "text-white inline-flex items-center py-6 px-3 mr-4 hover:text-black text-4xl font-bold monospace tracking-widest"
                : "inline-flex items-center py-6 px-3 mr-4 text-blue-200 hover:text-black text-4xl font-bold monospace tracking-widest"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/post"
            className={(navData) =>
              navData.isActive
                ? "inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-black monospace"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-black monospace"
            }
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className={(navData) =>
              navData.isActive
                ? "inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-black monospace"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-black monospace"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={(navData) =>
              navData.isActive
                ? "inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-black monospace"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-black monospace"
            }
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/lisa-armenteros/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/lisaarmenteros"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/lisa_armenteros/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
