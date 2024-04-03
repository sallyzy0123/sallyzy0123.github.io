// toggle the nav menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// implement the tag cloud
const myTags = [
  "JavaScript",
  "HTML/CSS",
  "Kotlin",
  "React",
  "Python",
  "Java",
  "Git",
  "Node.js",
  "Swift",
  "TypeScript",
  "MySQL",
  "Flask",
  "Azure App Service",
  "Bootstrap",
  "Figma",
  "ExpressJS",
  "Firebase",
  "GraphQL",
  "Adobe Illustrator",
  "MariaDB",
  "MongoDB",
  "React Native",
  "TailwindCSS",
  "MaterialUI",
  "WebSocket",
  "UI/UX design",
  "Linux",
  "Scrum",
  "Agile Methodology",
  "iOS Development",
  "Android Development",
];

var tagCloud = TagCloud(".section_skill", myTags, {
  // radius in px
  radius: 300,

  // animation speed
  // slow, normal, fast
  maxSpeed: "normal",
  initSpeed: "slow",

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: true,
});
var colors = ["#FFFFFF"];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector(".section_skill").style.color = random_color;
