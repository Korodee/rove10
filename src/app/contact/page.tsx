import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import CTASection from "@/components/home/CTASection";
import Container from "@/components/shared/Container";

export default function ContactPage() {
  return (
    <>
      <section className="bg-white pb-16 pt-8 md:pb-20 md:pt-12 lg:pb-24">
        <Container>
          <ContactForm />
          <div className="mt-12 md:mt-16 lg:mt-20">
            <ContactInfo />
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
