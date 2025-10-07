import logo from "/img/logo.jpg";
import profile_img_1 from "/img/profile_img_1.jpg";
import profile_img_2 from "/img/profile_img_2.jpg";
import profile_img_3 from "/img/profile_img_3.jpg";
import project_img_00 from "/img/project_img_00.jpg";
import project_img_01 from "/img/project_img_01.jpg";
import project_img_02 from "/img/project_img_02.jpg";
import project_img_03 from "/img/project_img_03.jpg";
import project_img_04 from "/img/project_img_04.jpg";
import project_img_05 from "/img/project_img_05.jpg";
import project_img_06 from "/img/project_img_06.jpg";
import project_img_07 from "/img/project_img_07.jpg";
import project_img_08 from "/img/project_img_08.jpg";
import project_img_09 from "/img/project_img_09.jpg";
import project_img_10 from "/img/project_img_10.jpg";
import menu_icon_1 from "/img/menu_icon_1.svg";
import xmark_icon from "/img/xmark_icon.svg";
import arrow_left from "/img/arrow_left.svg";
import arrow_right from "/img/arrow_right.svg";
import stars from "/img/stars.jpg";

const assets = {
  logo_main: logo,
  profile1: profile_img_1,
  profile2: profile_img_2,
  profile3: profile_img_3,
  project00: project_img_00,
  project01: project_img_01,
  project02: project_img_02,
  project03: project_img_03,
  project04: project_img_04,
  project05: project_img_05,
  project06: project_img_06,
  project07: project_img_07,
  project08: project_img_08,
  project09: project_img_09,
  project10: project_img_10,
  menu_icon: menu_icon_1,
  xmark_icon: xmark_icon,
  slide_left: arrow_left,
  slide_right: arrow_right,
  star_icon: stars,
};

const projectsData = [
  {
    title: "Skyline Haven",
    price: "$3,50,000",
    location: "California",
    image: project_img_05,
  },

  {
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: project_img_03,
  },

  {
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: project_img_04,
  },

  {
    title: "Woodside Road",
    price: "$4,00,000",
    location: "New Jersey",
    image: project_img_08,
  },

  {
    title: "Vintage & Specialty Wood",
    price: "$2,50,000",
    location: "San Francisco",
    image: project_img_10,
  },

  {
    title: "Contemporary Elengance",
    price: "$2,50,000",
    location: "Beverly Hills",
    image: project_img_07,
  },

  {
    title: "Sydeny Morning Herald",
    price: "$1,50,000",
    location: "San Francisco",
    image: project_img_09,
  },

  {
    title: "Pentagon",
    price: "$2,50,000",
    location: "Washington DC",
    image: project_img_01,
  },
];

const testimonilsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and help me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },

  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 5,
    text: "From the very first meeting, they understood my vision and help me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },

  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and help me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
];

export { assets, projectsData, testimonilsData };
