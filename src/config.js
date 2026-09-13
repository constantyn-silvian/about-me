// ============================================================
//  AICI ÎȚI PUI DATELE TALE — restul site-ului se ia de aici.
// ============================================================
import { FaGithub, FaInstagram, FaTelegram, FaSpotify, FaSteam } from "react-icons/fa6";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiC,
  SiMysql,
} from "react-icons/si";
// Poza de profil e în src/pfp.jpg — dacă o schimbi, păstrează numele sau modifică aici.
import pfp from "./pfp.jpg";

export const profile = {
  name: "Dimian Constantin Silvian",
  title: "Student la mate-info · Aspiring Software Developer",
  photo: pfp,
  email: "costidimian@gmail.com",
  location: "Craiova",
  occupation: "Student",
  // Lasă "" dacă nu vrei să apară.
  status: "Disponibil pentru proiecte",
  // Pune CV-ul în `public/` (ex: "/cv.pdf") și apare un buton de descărcare.
  cv: "",
  // Lasă "" ca să nu apară descrierea.
  bio: "",
};

// Tehnologiile pe care le știi. Lasă lista goală dacă nu vrei secțiunea.
export const skills = [
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#663399" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
];

// Adaugă / șterge / reordonează linkurile după plac.
// `color` e culoarea brandului — apare la hover.
export const links = [
  { name: "GitHub", handle: "@constantyn-silvian", url: "https://github.com/constantyn-silvian", icon: FaGithub, color: "#f0f6fc" },
  { name: "Instagram", handle: "@costi_dimian", url: "https://instagram.com/costi_dimian", icon: FaInstagram, color: "#E4405F" },
  { name: "Telegram", handle: "@constantyn_silvian", url: "https://t.me/constantyn_silvian", icon: FaTelegram, color: "#26A5E4" },
  { name: "Spotify", handle: "@costi", url: "https://open.spotify.com/user/yliadhssjk8djig98xgg4xs6c", icon: FaSpotify, color: "#1DB954" },
  { name: "Steam", handle: "@constantyn-silvian", url: "https://steamcommunity.com/id/constantynsilvian/", icon: FaSteam, color: "#66C0F4" },
];
