import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Privacy Policy | Adsnes",
  description:
    "Privacy Policy for Adsnes - Learn how we collect, use, and protect your data. Your privacy and data security are our top priorities.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f6fbfb] font-sans text-[#002525] overflow-x-hidden lg:pt-20 pt-10">
      {/* Back to Home Link */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link
          href={ROUTES.HOME}
          className="inline-flex items-center gap-2 text-[#008888] hover:text-[#014d4e] transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#005f5f]">
            Privacy <span className="text-gradient-primary">Policy</span>
          </h1>
          <p className="text-gray-600">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              At Adsnes, we collect information to provide better services to
              all our users. The types of information we collect include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Account Information:</strong> When you create an
                account, we collect information like your name, email address,
                and company details.
              </li>
              <li>
                <strong>Payment Information:</strong> For processing payments,
                we collect billing details through secure payment processors.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect information about how
                you interact with our services, including IP addresses, device
                information, and browsing activity.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies to enhance user experience and analyze service usage.
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To provide, maintain, and improve our services</li>
              <li>To process transactions and send related information</li>
              <li>
                To send administrative messages, updates, and security alerts
              </li>
              <li>To respond to your comments and questions</li>
              <li>To personalize your experience</li>
              <li>For analytics and research to improve our services</li>
              <li>To verify traffic quality and prevent fraud</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              3. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Service Providers:</strong> Trusted third parties who
                assist in operating our website and services
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of assets
              </li>
              <li>
                <strong>With Your Consent:</strong> When you explicitly agree to
                share information
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              4. Data Security
            </h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security
              measures to protect your personal information. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Strict access controls and authentication procedures</li>
              <li>Fraud detection and prevention systems</li>
              <li>Secure payment processing with PCI compliance</li>
            </ul>
            <p className="text-gray-600 mt-4 text-sm">
              However, no method of transmission over the Internet is 100%
              secure.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              5. Your Rights
            </h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have rights to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:support@adsnes.com"
                className="text-[#008888] hover:underline"
              >
                support@adsnes.com
              </a>
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              6. Cookies and Tracking Technologies
            </h2>

            <h3 className="text-xl font-bold mb-3 text-[#005f5f]">
              6.1 What Are Cookies
            </h3>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are placed on your device when
              you visit our website. They help us provide you with a better
              experience by remembering your preferences and understanding how
              you use our site.
            </p>

            <h3 className="text-xl font-bold mb-3 text-[#005f5f]">
              6.2 Types of Cookies We Use
            </h3>
            <div className="space-y-4 mb-4">
              <div className="bg-[#f6fbfb] p-4 rounded-lg">
                <h4 className="font-bold text-[#008888] mb-2">
                  Essential Cookies
                </h4>
                <p className="text-gray-700 text-sm">
                  Necessary for the website to function properly. These cookies
                  cannot be disabled as they enable core functionality like
                  security and authentication.
                </p>
              </div>
              <div className="bg-[#f6fbfb] p-4 rounded-lg">
                <h4 className="font-bold text-[#008888] mb-2">
                  Analytics Cookies
                </h4>
                <p className="text-gray-700 text-sm">
                  Collect anonymous information about how visitors use our
                  website to help us improve performance and user experience.
                </p>
              </div>
              <div className="bg-[#f6fbfb] p-4 rounded-lg">
                <h4 className="font-bold text-[#008888] mb-2">
                  Marketing Cookies
                </h4>
                <p className="text-gray-700 text-sm">
                  Track visitors across websites to display relevant
                  advertisements and measure campaign effectiveness.
                </p>
              </div>
              <div className="bg-[#f6fbfb] p-4 rounded-lg">
                <h4 className="font-bold text-[#008888] mb-2">
                  Functional Cookies
                </h4>
                <p className="text-gray-700 text-sm">
                  Remember your preferences to provide enhanced, personalized
                  features.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-[#005f5f]">
              6.3 Managing Cookies
            </h3>
            <p className="text-gray-700 mb-4">
              You can control and/or delete cookies as you wish. You can delete
              all cookies that are already on your computer and you can set most
              browsers to prevent them from being placed. However, if you do
              this, you may have to manually adjust some preferences every time
              you visit a site and some services and functionalities may not
              work.
            </p>

            <p className="text-gray-700">
              You can manage your cookie preferences at any time by adjusting
              your browser settings. For more information about cookies and how
              to manage them, visit{" "}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008888] hover:underline"
              >
                www.aboutcookies.org
              </a>
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              7. Children's Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you become aware that a child has provided us with personal
              information, please contact us immediately.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              8. International Data Transfers
            </h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              to protect your information in accordance with this Privacy
              Policy.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              9. Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last updated" date. For significant changes, we
              may provide additional notice.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              10. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <div className="bg-[#f6fbfb] p-6 rounded-xl">
              <p className="text-[#008888] font-medium mb-2">Email:</p>
              <a
                href="mailto:support@adsnes.com"
                className="text-[#014d4e] hover:text-[#008888] transition-colors block mb-4"
              >
                support@adsnes.com
              </a>

              <p className="text-[#008888] font-medium mb-2">Follow Us:</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/adsnes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#014d4e] hover:text-[#008888] transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://discord.gg/R9U9eJYdbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#014d4e] hover:text-[#008888] transition-colors"
                >
                  Discord
                </a>
                <a
                  href="https://t.me/adsnes_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#014d4e] hover:text-[#008888] transition-colors"
                >
                  Telegram
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
