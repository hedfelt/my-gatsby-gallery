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

  // const contactdata = data.sanityContactPage.contactImage.asset;
  // console.log(contactdata);

  return (
    <Wrapper color="#393939">
      <div className={styles.contact}>
        <div className={styles.contact__leftWrapper}>
          <GatsbyImage
            image={data.sanityContactPage.contactImage.asset.gatsbyImageData}
            alt=""
            // className={styles.gallery__image}
            // id="pics"
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
    </Wrapper>
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
