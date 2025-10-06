import type { Metadata, Viewport } from "next"
import PageHeader from "@/components/page-header"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Privacy Policy | TechSpire Solutions",
  description:
    "Privacy Policy for TechSpire Solutions by Vinay Verma. Learn how we collect, use, and protect your personal information.",
  keywords: ["privacy policy", "data protection", "TechSpire Solutions", "Vinay Verma"],
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Privacy Policy" description="How we collect, use, and protect your information" />

      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-muted-foreground">Last updated: April 4, 2024</p>

            <h2>Introduction</h2>
            <p>
              At TechSpire Solutions, we respect your privacy and are committed to protecting your personal data. This
              privacy policy will inform you about how we look after your personal data when you visit our website and
              tell you about your privacy rights and how the law protects you.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped
              together as follows:
            </p>
            <ul>
              <li>
                <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
              </li>
              <li>
                <strong>Contact Data</strong> includes email address and telephone numbers.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time
                zone setting and location, browser plug-in types and versions, operating system and platform, and other
                technology on the devices you use to access this website.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you use our website and services.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal
              data in the following circumstances:
            </p>
            <ul>
              <li>To provide you with the services you have requested.</li>
              <li>To respond to your inquiries and contact you about changes to our services.</li>
              <li>
                To provide you with marketing communications about our services that we think may be of interest to you.
              </li>
              <li>To improve our website and services.</li>
              <li>To comply with legal and regulatory requirements.</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally
              lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your
              personal data to those employees, agents, contractors and other third parties who have a business need to
              know.
            </p>

            <h2>Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data,
              including the right to:
            </p>
            <ul>
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br />
              Email: contact@techspiresolutions.in
              <br />
              Phone: +91 9219967205
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
