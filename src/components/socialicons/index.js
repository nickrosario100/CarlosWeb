import React from "react";
import "./style.css";
import {
  FaYoutube,
  FaInstagram,
  FaTiktok
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.tiktok && (
          <li>
            <a href={socialprofils.tiktok}>
              <FaTiktok />
            </a>
          </li>
        )}
      </ul>
      <p className="large">Follow Me</p>
    </div>
  );
};
