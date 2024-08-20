"use client";

import { useEffect, useState } from "react";

// Function to fetch the latest tag
const getLatestTag = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/shaaanuu/endernote-flutter/tags"
    );
    const tags = await response.json();
    const latestTag = tags[0].name;
    return `https://github.com/shaaanuu/endernote-flutter/releases/tag/${latestTag}`;
  } catch (error) {
    console.error("Error fetching the latest tag:", error);
    return "#";
  }
};

export const Navbar = () => {
  const [tagUrl, setTagUrl] = useState("#");

  useEffect(() => {
    const fetchTagUrl = async () => {
      const url = await getLatestTag();
      setTagUrl(url);
    };

    fetchTagUrl();
  }, []);

  return (
    <nav className="navbar">
      <a href="#">
        <div className="logo">
          <img src="/enderman.png" alt="Logo" />
          <div className="name">Endernote</div>
        </div>
      </a>
      <div className="get-app">
        <a className="download" href={tagUrl}>
          Download
        </a>
      </div>
    </nav>
  );
};
