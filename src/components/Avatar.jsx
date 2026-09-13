import { useState } from "react";

export default function Avatar({ src, name, online }) {
  const [failed, setFailed] = useState(!src);
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="avatar-wrap">
      <div className="avatar">
        {failed ? <span>{initials}</span> : <img src={src} alt={name} onError={() => setFailed(true)} />}
      </div>
      {online && <span className="avatar-status" />}
    </div>
  );
}
