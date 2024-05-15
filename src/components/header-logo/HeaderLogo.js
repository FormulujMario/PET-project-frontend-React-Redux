import { ghPagesPath } from "../constants";
import "./HeaderLogo.css";

export const HeaderLogo = () => {
  return (
    <div className="logo">
      <a href={ghPagesPath}>
        <div className="svg-logo">
          <svg
            width="54"
            height="48"
            viewBox="0 0 54 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="frame"
              d="M0.964286 0.888889V45.3333V47.1111H53.0357V0.888889H0.964286Z"
              stroke="black"
              stroke-width="3.5"
            />
            <path
              id="line-1"
              d="M35 0.888889V47.1111"
              stroke="black"
              stroke-width="3.5"
            />
            <path
              id="line-2"
              d="M19 0.888889V47.1111"
              stroke="black"
              stroke-width="3.5"
            />
            <path
              id="line-3"
              d="M34 22L53 22"
              stroke="black"
              stroke-width="3.5"
            />
            <path
              id="line-4"
              d="M19 14.2222L35 14.2222"
              stroke="black"
              stroke-width="3.5"
            />
            <path
              id="line-5"
              d="M19 31.1111H35"
              stroke="black"
              stroke-width="3.5"
            />
            <path id="line-6" d="M1 26H19" stroke="black" stroke-width="3.5" />
            <path
              id="k"
              d="M6.5 6V22M6.5 15.7778C14.5 6 6.5 15.7778 14.5 6M8.9 13.1111C14.5 22 8.9 13.1111 14.5 22L8.9 13.1111Z"
              stroke="black"
              stroke-width="3"
            />
            <path
              id="a"
              d="M24 10.6667C25 8.88891 26 7.11109 27 5.33333C28 7.11109 28.8 8.53333 30 10.6667M25.2 8.53333H28.8"
              stroke="black"
              stroke-width="1.7"
            />
            <path
              id="b"
              d="M25 26.6667V18.6667C29 18.6667 29 22.0952 25 22.0952M25 26.6667C30.3333 26.6667 30.3333 22.0952 25 22.0952M25 26.6667V22.0952"
              stroke="black"
              stroke-width="1.7"
            />
            <path
              id="e"
              d="M29 35.5556H25V42.6667H29M25 38.7879H28"
              stroke="black"
              stroke-width="1.7"
            />
            <path
              id="n"
              d="M7 41.7778V31.4929C7 31.39 7.14452 31.368 7.19497 31.4577C12.805 41.4312 7.19497 31.4577 12.805 41.4312C12.8555 41.5208 13 41.4989 13 41.396V31.1111"
              stroke="black"
              stroke-width="2.5"
            />
            <path
              id="i"
              d="M44.5 6.33962V16.3019M41 6.33962H48M41 16.3019H48"
              stroke="black"
              stroke-width="2.5"
            />
            <path
              id="t"
              d="M44 27.6226V40.3019M39 27.6226H49"
              stroke="black"
              stroke-width="2.5"
            />
            <defs>
              <clipPath id="clip0_13_89">
                <rect width="54" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <img
            src={process.env.REACT_APP_IMAGES_PATH + "/logo-bottom.png"}
            alt=""
          />
        </div>
      </a>
    </div>
  );
};
