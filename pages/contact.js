import ContactForm from "../components/contact/contact-form";
import Head from "next/dist/next-server/lib/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Contact me by Sending your messages"
        />
      </Head>
      <ContactForm> </ContactForm>
    </>
  );
}
