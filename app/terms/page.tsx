import type { Metadata } from "next"
import PageHeader from "@/components/page-header"

export const metadata: Metadata = {
  title: "Terms of Service | TechSpire Solutions",
  description:
    "Terms of Service for TechSpire Solutions by Vinay Verma. Learn about the terms and conditions governing the use of our services.",
  keywords: ["terms of service", "terms and conditions", "TechSpire Solutions", "Vinay Verma"],
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Terms of Service" description="Terms and conditions governing the use of our services" />

      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-muted-foreground">Last updated: April 4, 2024</p>

            <h2>Introduction</h2>
            <p>
              These terms and conditions outline the rules and regulations for the use of TechSpire Solutions' website
              and services. By accessing this website, we assume you accept these terms and conditions in full. Do not
              continue to use TechSpire Solutions' website if you do not accept all of the terms and conditions stated
              on this page.
            </p>

            <h2>License</h2>
            <p>
              Unless otherwise stated, TechSpire Solutions and/or its licensors own the intellectual property rights for
              all material on this website. All intellectual property rights are reserved. You may view and/or print
              pages from the website for your own personal use subject to restrictions set in these terms and
              conditions.
            </p>

            <h3>You must not:</h3>
            <ul>
              <li>Republish material from this website</li>
              <li>Sell, rent or sub-license material from this website</li>
              <li>Reproduce, duplicate or copy material from this website</li>
              <li>
                Redistribute content from TechSpire Solutions (unless content is specifically made for redistribution)
              </li>
            </ul>

            <h2>User Content</h2>
            <p>
              In these terms and conditions, "User Content" shall mean any audio, video, text, images or other material
              you choose to display on this website. By displaying your User Content, you grant TechSpire Solutions a
              non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt,
              publish, translate and distribute it in any and all media.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall TechSpire Solutions, nor any of its officers, directors and employees, be liable to you
              for anything arising out of or in any way connected with your use of this website, whether such liability
              is under contract, tort or otherwise, and TechSpire Solutions, including its officers, directors and
              employees shall not be liable for any indirect, consequential or special liability arising out of or in
              any way related to your use of this website.
            </p>

            <h2>Indemnification</h2>
            <p>
              You hereby indemnify to the fullest extent TechSpire Solutions from and against any and all liabilities,
              costs, demands, causes of action, damages and expenses (including reasonable attorney's fees) arising out
              of or in any way related to your breach of any of the provisions of these terms.
            </p>

            <h2>Governing Law & Jurisdiction</h2>
            <p>
              These terms will be governed by and construed in accordance with the laws of India, and you submit to the
              non-exclusive jurisdiction of the courts located in India for the resolution of any disputes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
