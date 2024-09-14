import scholar1 from '../images/scholar_1.png'
import scholar2 from '../images/scholar_2.png'
import scholar3 from '../images/scholar_3.png'
import scholar4 from '../images/scholar_4.png'
import scholar5 from '../images/scholar_5.png'

import aboutus from '../images/aboutus.png'
import joinus from '../images/joinus.png'
import scholars from '../images/scholars.png'

import aboutussneak from '../images/aboutussneakpeek.png'
import scholarsneak from '../images/scholarssneak.png'
import joinussneak from '../images/joinussneak.png'

const topScholars = [
    {name: "Yurii5", gp: "683", axieLevel: "35", place: "1st place last season", reward: 100, link: scholar1},
    {name: "joncel14", gp: "622", axieLevel: "29", place: "2nd place last season", reward: 75, link: scholar2},
    {name: "AHL", gp: "526", axieLevel: "20", place: "3rd place last season", reward: 50, link: scholar3},
    {name: "heliumlubis", gp: "515", axieLevel: "28", place: "4th place last season", reward: 30, link: scholar4},
    {name: "sharonmaetorres", gp: "474", axieLevel: "15", place: "5th place last season", reward: 25, link: scholar5},
];

const rewards = [
    {place: "1st", reward: 100 },
    {place: "2nd", reward: 75 },
    {place: "3rd", reward: 50 },
    {place: "4th", reward: 30 },
    {place: "5th", reward: 25 },
    {place: "6th", reward: 24 },
    {place: "7th", reward: 23 },
    {place: "8th", reward: 22 },
    {place: "9th", reward: 21 },
    {place: "10th", reward: 20 },
];

const homeCardDetails = [
    {image: aboutus, link: "/about", alt: "About", sneak: aboutussneak},
    {image: scholars, link: "/scholars", alt: "Scholars", sneak: scholarsneak},
    {image: joinus, link: "/join", alt: "Join", sneak: joinussneak},
];

export { topScholars, rewards, homeCardDetails };