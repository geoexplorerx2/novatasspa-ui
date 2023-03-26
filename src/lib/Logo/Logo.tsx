import React, { FC } from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
};

const Logo: FC<LogoProps> = ({
  img,
  imgLight,
  className = "",
}) => {
  return (
    <Link
      to="/"
      className={`inline-block text-primary-6000 ${className}`}
    >
      {img ? (
        <img
          className={`block w-40 max-h-20`}
          src={img}
          alt="Logo"
        />
      ) : (
        ""
      )}
    </Link>
  );
};

export default Logo;
