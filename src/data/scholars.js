import scholar1 from "../images/botchog1.png";
import scholar2 from "../images/botchog2.png";
import scholar3 from "../images/botchog3.png";
import scholar4 from "../images/botchog4.png";
import scholar5 from "../images/botchog5.png";

import aboutus from "../images/aboutus.png";
import joinus from "../images/joinus.png";
import scholars from "../images/scholars.png";

import aboutussneak from "../images/aboutussneakpeek.png";
import scholarsneak from "../images/scholarssneak.png";
import joinussneak from "../images/joinussneak.png";

import bg1 from "../images/bg1.png";
import bg2 from "../images/bg2.png";
import bg3 from "../images/bg3.jpg";
import bg4 from "../images/bg4.jpg";
import bg5 from "../images/bg5.jpg";

import jackhowdy from "../images/jackhowdy.png";
import yarrk from "../images/yarrk.jpg";
import rosamiya from "../images/rosamiya.png";
import squanchy from "../images/squanchy.jpg";

const topScholars = [
  {
    name: "Yurii5",
    gp: "683",
    axieLevel: "35",
    place: "1st place last season",
    reward: 100,
    link: scholar1,
    bg: bg1,
  },
  {
    name: "joncel14",
    gp: "622",
    axieLevel: "29",
    place: "2nd place last season",
    reward: 75,
    link: scholar2,
    bg: bg2,
  },
  {
    name: "AHL",
    gp: "526",
    axieLevel: "20",
    place: "3rd place last season",
    reward: 50,
    link: scholar3,
    bg: bg3,
  },
  {
    name: "heliumlubis",
    gp: "515",
    axieLevel: "28",
    place: "4th place last season",
    reward: 30,
    link: scholar4,
    bg: bg4,
  },
  {
    name: "sharonmaetorres",
    gp: "474",
    axieLevel: "15",
    place: "5th place last season",
    reward: 25,
    link: scholar5,
    bg: bg5,
  },
];

const rewards = [
  { place: "1st", reward: 100 },
  { place: "2nd", reward: 75 },
  { place: "3rd", reward: 50 },
  { place: "4th", reward: 30 },
  { place: "5th", reward: 25 },
  { place: "6th", reward: 24 },
  { place: "7th", reward: 23 },
  { place: "8th", reward: 22 },
  { place: "9th", reward: 21 },
  { place: "10th", reward: 20 },
];

const homeCardDetails = [
  { image: aboutus, link: "/about", alt: "About", sneak: aboutussneak },
  { image: scholars, link: "/scholars", alt: "Scholars", sneak: scholarsneak },
  { image: joinus, link: "/join", alt: "Join", sneak: joinussneak },
];

const team = [
  { name: "Jackhowdy", role: "Owner", img: jackhowdy },
  { name: "Yarrk", role: "Owner", img: yarrk },
  { name: "Squanchy", role: "Community Manager", img: squanchy },
  { name: "Rosa Miya", role: "Community Manager", img: rosamiya },
];

export { topScholars, rewards, homeCardDetails, team };
