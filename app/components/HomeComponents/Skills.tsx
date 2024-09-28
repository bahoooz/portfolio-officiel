import React from "react";

export default function Skills() {
  return (
    <div>
      <h2>Mes Skills</h2>
      <div className="flex">
        <div>
          <span>languages</span>
          <ul>
            <li>javascript</li>
            <li>typescript</li>
          </ul>
        </div>
        <div>
          <span>frameworks & librarys</span>
          <ul>
            <li>nextjs</li>
            <li>reactjs</li>
            <li>tailwindcss</li>
            <li>framer motion</li>
          </ul>
        </div>
        <div>
          <span>design & video</span>
          <ul>
            <li>figma</li>
            <li>photoshop</li>
            <li>illustrator</li>
            <li>premiere pro</li>
          </ul>
        </div>
        <div>
          <span>backend</span>
          <ul>
            <li>nodejs</li>
            <li>expressjs</li>
            <li>mongodb</li>
          </ul>
        </div>
        <div>
          <span>cms</span>
          <ul>
            <li>strapi</li>
          </ul>
        </div>
        <div>
          <span>autres</span>
          <ul>
            <li>github</li>
            <li>git</li>
            <li>vercel</li>
            <li>netlify</li>
            <li>heroku</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
