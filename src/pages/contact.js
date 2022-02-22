import React, { useState } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import * as styles from "../styles/contact.module.scss";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function ContactPage({ data }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formSubmitHandler = () => {
    setFormSubmitted(true);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contact__imagewrapper}>
        <GatsbyImage
          image={data.sanityContactPage.contactImage.asset.gatsbyImageData}
          alt=""
          className={styles.contact__image}
        />
        <div className={styles.contact__overlaygrid}></div>
      </div>
      <div className={styles.contact__form}>
        <h1 className={styles.contact__header}>Contact me</h1>
        <ContactForm onFormSubmit={formSubmitHandler} />
      </div>
    </div>
  );
}

export const query = graphql`
  {
    sanityContactPage {
      contactImage {
        asset {
          gatsbyImageData(backgroundColor: "black", placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;
