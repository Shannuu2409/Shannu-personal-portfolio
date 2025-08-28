import React, { useEffect, useState } from "react";
import { getIconUrl, getGenericIconDataUrl } from "../../data/portfolio";

export default function IconImage({ name, size = 24, className = "" }) {
  const [src, setSrc] = useState(getIconUrl(name, size));

  useEffect(() => {
    setSrc(getIconUrl(name, size));
  }, [name, size]);

  return (
    <img
      src={src}
      alt={`${name} icon`}
      width={size}
      height={size}
      loading="lazy"
      className={className}
      onError={() => setSrc(getGenericIconDataUrl(size))}
    />
  );
}
