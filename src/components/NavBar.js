import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className={(navData) =>
              navData.isActive
                ? "text-white inline-flex items-center py-6 px-3 mr-4 hover:text-white text-4xl font-bold monospace tracking-widest"
                : "inline-flex items-center py-6 px-3 mr-4 text-blue-200 hover:text-white text-4xl font-bold monospace tracking-widest"
            }
          >
            Home
          </NavLink>
          {/* 
            <NavLink
            to="/post"
            className={(navData) =>
              navData.isActive
                ? "inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-white monospace"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white monospace"
            }
          >
            Blog Posts
          </NavLink>
          */}
          <NavLink
            to="/project"
            className={(navData) =>
              navData.isActive
                ? "inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-white monospace"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white monospace"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={(navData) =>
              navData.isActive
                ? "inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-white monospace"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white monospace"
            }
          >
            About Me
          </NavLink>
          <a
            href="https://wiki.lisacodes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white monospace"
          >
            Wiki
          </a>
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
            url="https://www.instagram.com/artisticallycoding/"
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
