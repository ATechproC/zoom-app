import home from "../public/icons/Home.svg";
import upcoming from "../public/icons/upcoming.svg";
import previous from "../public/icons/previous.svg";
import recording from "../public/icons/recordings.svg";
import personalRoom from "../public/icons/add-personal.svg";
import logo from "../public/icons/logo.svg";
import hamburger from "../public/icons/hamburger.svg";
import add from "../public/icons/add-meeting.svg";
import join from "../public/icons/join-meeting.svg";
import schedule from "../public/icons/schedule.svg";
import video from "../public/icons/Video.svg";
import avatar1 from "../public/images/avatar-2.jpeg";
import avatar2 from "../public/images/avatar-3.png";
import avatar3 from "../public/images/avatar-4.png";
import avatar4 from "../public/images/avatar-5.png";
import copy from "../public/icons/copy.svg";
import icon from "../public/icons/icon.png";
import loader from "../public/icons/loading-circle.svg";
import checked from "../public/icons/checked.svg";


export const assets = {
    home,
    upcoming,
    previous,
    recording,
    personalRoom,
    logo,
    hamburger,
    add,
    join,
    schedule,
    video,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    copy,
    icon,
    loader,
    checked
};

export const sideBarLinks = [
    {
        label: "Home",
        rout: "/",
        icon: assets.home,
    },
    {
        label: "Upcoming",
        rout: "/upcoming",
        icon: assets.upcoming,
    },
    {
        label: "Previous",
        rout: "/previous",
        icon: assets.previous,
    },
    {
        label: "Recording",
        rout: "/recording",
        icon: assets.recording,
    },
    {
        label: "Personal Room",
        rout: "/personal-room",
        icon: assets.personalRoom,
    },
];

export const avatarImages = [
    '/images/avatar-1.jpeg',
    '/images/avatar-2.jpeg',
    '/images/avatar-3.png',
    '/images/avatar-4.png',
    '/images/avatar-5.png',
];
