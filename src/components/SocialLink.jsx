import { FaArrowRight } from "react-icons/fa6";

export default function SocialLink({ link }) {
  const Icon = link.icon;

  return (
    <a
      className="link"
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      style={link.color ? { "--brand": link.color } : undefined}
    >
      <Icon className="link-icon" />
      <span className="link-name">{link.name}</span>
      {link.handle && <span className="link-handle">{link.handle}</span>}
      <FaArrowRight className="link-arrow" />
    </a>
  );
}
