import React, { useState } from "react";
import { getIconCandidates, getGenericIconDataUrl } from "../../data/portfolio";

export default function IconImage({ name, size = 24, className = "" }) {
  const candidates = getIconCandidates(name, size);
  const [index, setIndex] = useState(0);

  const currentSrc = candidates[index] || getGenericIconDataUrl(size);

  return (
    <img
      src={currentSrc}
      alt={`${name} icon`}
      width={size}
      height={size}
      loading="lazy"
      className={className}
      onError={() => setIndex((prev) => prev + 1)}
    />
  );
}
