import type { Metadata } from "next";
import ContactPageContent from "@/section/contactPageContent";

export const metadata: Metadata = {
  title: "Get in Touch | BrainADZ Marketing",
  description:
    "Talk to BrainADZ Marketing about digital strategy, performance marketing, branding, creative campaigns, websites, and automation.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
