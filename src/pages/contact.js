import React, { useState } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import * as styles from "../styles/contact.module.scss";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";

export default function ContactPage({ data }) {
  return (
    <div className={styles.contact}>
      <Seo title={"Hanne Edfelt - Contact"} />

      <div className={styles.contact__imagewrapper}>
        <GatsbyImage
          image={data.sanityContactPage.contactImage.asset.gatsbyImageData}
          alt=""
          className={styles.contact__image}
        />
        <div className={styles.contact__overlaygrid}></div>
      </div>
      <div className={styles.contact__form}>
        <h1 className="">
          CONTACT <br />
          ME
        </h1>
        <ContactForm />
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
