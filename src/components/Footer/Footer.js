import React from "react";
import "./Footer.scss";
import { motion } from "framer-motion";
import Icons from "../../UI/Icons/Icons";
import { Link } from "gatsby";
import Logo from "../../UI/Logo/Logo";
import Line from "../../UI/line/line";

const Footer = () => {
  const lineMotion = {
    hover: {
      y: 1,
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      },
    },
    rest: (i) => {
      const delay = i;
      return {
        pathLength: delay,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "tween",
          ease: "easeOut",
        },
      };
    },
  };
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__logowrapper">
          <div className="footer__linewrapper">
            <motion.svg
              height="100%"
              width="100%"
              viewBox="0 0 100 5"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0 0 H100"
                stroke="#000"
                strokeWidth="0.2"
                variants={lineMotion}
                custom={1}
              />
            </motion.svg>
          </div>
          <div className="footer__logo">
            <Logo fill={"#000"} />
          </div>
          <div className="footer__linewrapper">
            <motion.svg
              height="100%"
              width="100%"
              viewBox="0 0 100 5"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0 0 H100"
                stroke="#000"
                strokeWidth="0.2"
                variants={lineMotion}
                custom={1}
              />
            </motion.svg>
          </div>
        </div>

        <div className="footer__linkswrapper">
          <div className="footer__linksgroups">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link className="footer__about" to="/about">
                ABOUT
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link className="footer__works" to="/artworks">
                ARTWORKS
              </Link>
            </motion.div>
          </div>
          <div className="footer__icons">
            <div className="footer__icon">
              <svg height="100%" width="100%" viewBox="0 0 56.693 56.693">
                <path
                  d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z"
                  fill="#000"
                />
              </svg>
            </div>

            <div className="footer__icon">
              <svg height="100%" viewBox="0 0 512 512" width="100%">
                <path
                  d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
                  fill="#000"
                />
              </svg>
            </div>

            <div className="footer__icon">
              <svg
                height="100%"
                width="100%"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="#000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
              </svg>
            </div>
          </div>

          <div className="footer__linksgroups">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link className="footer__home" to="/">
                HOME
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link className="footer__contact" to="/contact">
                CONTACT
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="footer__verticalline">
          <div className="footer__verticalline">
            <motion.svg
              height="100%"
              width="20%"
              viewBox="0 0 5 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M2.5 0 L2.5 100"
                stroke="#000"
                strokeWidth="0.2"
                variants={lineMotion}
                custom={1}
              />
            </motion.svg>
          </div>
        </div>
      </div>

      <div className="footer__bottom">Hanne Edfelt @ 2021</div>
    </div>
  );
};

export default Footer;
