import {
  MdDashboard,
  MdHistory,
  MdCalendarMonth,
  MdEventNote,
  MdShowChart,
  MdScience,
  MdChatBubble,
  MdSupportAgent,
  MdSettings,
} from "react-icons/md";

export const navLinks = [
  { id: 1, name: "Dashboard", icon: MdDashboard, path: "/" },
  { id: 2, name: "History", icon: MdHistory, path: "/history" },
  { id: 3, name: "Calendar", icon: MdCalendarMonth, path: "/calendar" },
  { id: 4, name: "Appointments", icon: MdEventNote, path: "/appointments" },
  { id: 5, name: "Statistics", icon: MdShowChart, path: "/statistics" },
];

export const navLinksEnd = [
  { id: 1, name: "Chat", icon: MdChatBubble, path: "/chat" },
  { id: 2, name: "Support", icon: MdSupportAgent, path: "/support" },
  { id: 3, name: "Setting", icon: MdSettings, path: "/setting" },
];
