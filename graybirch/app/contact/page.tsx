import React from "react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
  <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h1 className="font-title text-4xl md:text-5xl tracking-tight">We'd Love to Hear From You!</h1>
      </Reveal>

      <Reveal delay={120}>
  <p className="mt-4 max-w-4xl leading-relaxed">
          Whether you're a care facility, potential partner, volunteer, or supporter, we're here to help and happy to talk. Have a question about bringing tech into your organization? Want to donate, volunteer, or collaborate? Let's connect.
        </p>
      </Reveal>

  <div className="mt-14 md:flex md:flex-col md:gap-14 relative">
        {/* Form container - now takes full width (4x the original 25%) */}
        <Reveal>
          <div className="w-full">
            <ContactForm />
          </div>
        </Reveal>
        {/* Contact details positioned below form */}
        <Reveal delay={120}>
          <div className="mt-20 w-full border-t border-black/20 pt-10">
            <div className="space-y-6 text-base md:text-xl leading-relaxed">
              <div>
                <div className="font-title uppercase tracking-wide text-2xl md:text-3xl">General Inquiries</div>
                <div className="mt-5">Email:<br /><span className="font-medium"><a href="mailto:inquiries@graybirchfoundation.org">contact@graybirchfoundation.org</a></span></div>
                <div className="mt-4">Phone:<br /><span className="font-medium"><a href="tel:4086737152">(408) 673-7152</a></span></div>
                <div className="mt-4">Address:<br /><span className="font-medium not-italic">20660 Stevens Creek Blvd #263<br />Cupertino, CA 95014</span></div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Removed Newsletter section */}

    </div>
  );
}