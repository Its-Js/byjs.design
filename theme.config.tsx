import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Js.</span>,
  project: {
    link: "https://github.com/Its-Js/byjs.design",
  },
  chat: {
    link: "https://figma.com/@itsjs",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="90" fill="#1E1E1E" />
        <g clipPath="url(#clip0_1_136)">
          <path
            d="M45 45.5C45 42.9804 46.0009 40.5641 47.7825 38.7825C49.5641 37.0009 51.9804 36 54.5 36C57.0196 36 59.4359 37.0009 61.2175 38.7825C62.9991 40.5641 64 42.9804 64 45.5C64 48.0196 62.9991 50.4359 61.2175 52.2175C59.4359 53.9991 57.0196 55 54.5 55C51.9804 55 49.5641 53.9991 47.7825 52.2175C46.0009 50.4359 45 48.0196 45 45.5Z"
            fill="#1ABCFE"
          />
          <path
            d="M26 64.5C26 61.9804 27.0009 59.5641 28.7825 57.7825C30.5641 56.0009 32.9804 55 35.5 55H45V64.5C45 67.0196 43.9991 69.4359 42.2175 71.2175C40.4359 72.9991 38.0196 74 35.5 74C32.9804 74 30.5641 72.9991 28.7825 71.2175C27.0009 69.4359 26 67.0196 26 64.5V64.5Z"
            fill="#0ACF83"
          />
          <path
            d="M45 17V36H54.5C57.0196 36 59.4359 34.9991 61.2175 33.2175C62.9991 31.4359 64 29.0196 64 26.5C64 23.9804 62.9991 21.5641 61.2175 19.7825C59.4359 18.0009 57.0196 17 54.5 17H45Z"
            fill="#FF7262"
          />
          <path
            d="M26 26.5C26 29.0196 27.0009 31.4359 28.7825 33.2175C30.5641 34.9991 32.9804 36 35.5 36H45V17H35.5C32.9804 17 30.5641 18.0009 28.7825 19.7825C27.0009 21.5641 26 23.9804 26 26.5V26.5Z"
            fill="#F24E1E"
          />
          <path
            d="M26 45.5C26 48.0196 27.0009 50.4359 28.7825 52.2175C30.5641 53.9991 32.9804 55 35.5 55H45V36H35.5C32.9804 36 30.5641 37.0009 28.7825 38.7825C27.0009 40.5641 26 42.9804 26 45.5V45.5Z"
            fill="#A259FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_136">
            <rect
              width="38"
              height="57"
              fill="white"
              transform="translate(26 17)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  footer: {
    text: (
      <span>
        Please hesitate to reach out to me at:{" "}
        <a
          href="mailto:itsjs@icloud.com"
          style={{ textDecoration: "underline" }}
        >
          itsjs@icloud.com
        </a>
      </span>
    ),
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
};

export default config;
