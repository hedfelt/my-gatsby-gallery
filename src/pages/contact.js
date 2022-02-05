import React, { useState } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import * as styles from "../styles/contact.module.scss";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function ContactPage({ data }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formSubmitHandler = () => {
    setFormSubmitted(true);
  };

  return (
    <>
      <div className={styles.contact}>
        <div className={styles.contact__leftWrapper}>
          <GatsbyImage
            image={data.sanityContactPage.contactImage.asset.gatsbyImageData}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className={styles.contact__rightWrapper}>
          <h1 className={styles.contact__header}>CONTACT ME</h1>
          {formSubmitted ? (
            <div>Thank you!</div>
          ) : (
            <ContactForm onFormSubmit={formSubmitHandler} />
          )}
        </div>
      </div>
    </>
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
