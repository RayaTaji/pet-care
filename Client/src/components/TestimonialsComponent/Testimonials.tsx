import React from "react";
import styles from "./Testimonials.module.scss";
import TestimonialCard from "./Card/TestimonialCard";
// import Person1 from "../../assets/images/People/Person1.jpeg";
import Person2 from "../../assets/images/People/Person2.jpeg";
import Person3 from "../../assets/images/People/Person3.jpg";
import Person4 from "../../assets/images/People/Person4.png";

export default function Testimonials() {
  return (
    <div id="testimonials" className={styles.container}>
      <h1>Loved by Pets. Trusted by Their Humans.</h1>
      <div className={styles.testimonialContainer}>
        {/* <TestimonialCard
          userImageUrl={Person1}
          userTitle="Cat Mom"
          userName="Gabriella R."
          testimonialText="I was so nervous letting someone else groom Mochi, but the team was amazing! She came back fluffy, happy, and smelling like heaven. Already booked our next appointment!"
        /> */}

        <TestimonialCard
          userImageUrl={Person3}
          userTitle="Proud Dog Mom"
          userName="Selma A."
          testimonialText="I love how they actually remembered my dog’s name on the second visit. You can’t fake that kind of care."
        />
        <TestimonialCard
          userImageUrl={Person2}
          userTitle="Dog Dad to Coco"
          userName="Jason T."
          testimonialText="My dog hates water but somehow left the bath smiling?? These people are actual pet whisperers. 10/10 would trust again."
        />
        <TestimonialCard
          userImageUrl={Person4}
          userTitle="Cat queen"
          userName="Noor F."
          testimonialText="My pup never lets anyone touch her nails, but they did it without drama — and with treats?? I'm in shock."
        />
      </div>
    </div>
  );
}
