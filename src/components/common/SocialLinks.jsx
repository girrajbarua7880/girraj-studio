import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaReddit,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

import { SiCredly, SiLeetcode } from "react-icons/si";

import { personalData } from "../../data/personalData";

const links = {
  linkedin: {
    label: "LinkedIn",
    href: () => personalData.social.linkedin,
    icon: FaLinkedin,
  },

  github: {
    label: "GitHub",
    href: () => personalData.social.github,
    icon: FaGithub,
  },

  x: {
    label: "X",
    href: () => personalData.social.x,
    icon: FaTwitter,
  },

  discord: {
    label: "Discord",
    href: () => personalData.social.discord,
    icon: FaDiscord,
  },

  reddit: {
    label: "Reddit",
    href: () => personalData.social.reddit,
    icon: FaReddit,
  },

  instagram: {
    label: "Instagram",
    href: () => personalData.social.instagram,
    icon: FaInstagram,
  },

  telegram: {
    label: "Telegram",
    href: () => personalData.social.telegram,
    icon: FaTelegram,
  },

  whatsapp: {
    label: "WhatsApp",
    href: () => `https://wa.me/${personalData.whatsapp}`,
    icon: FaWhatsapp,
  },

  email: {
    label: "Email",
    href: () => `mailto:${personalData.email}`,
    icon: FaEnvelope,
  },

  credly: {
    label: "Credly",
    href: () => personalData.social.credly,
    icon: SiCredly,
  },

  leetcode: {
    label: "LeetCode",
    href: () => personalData.social.leetcode,
    icon: SiLeetcode,
  },
};

export default function SocialLinks({
  items = [
    "linkedin",
    "github",
    "x",
    "discord",
    "reddit",
    "instagram",
    "telegram",
    "whatsapp",
    "email",
    "credly",
  ],
}) {
  return (
    <div className="flex items-center gap-5">
      {items.map((item) => {
        const link = links[item];

        if (!link) return null;

        const href = link.href();

        if (!href) return null;

        const Icon = link.icon;
        const isExternal = !href.startsWith("mailto:");

        return (
          <a
            key={item}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            title={link.label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-200 hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}