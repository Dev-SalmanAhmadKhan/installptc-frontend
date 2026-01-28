import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | InstallPTC",
  description: "Terms and Conditions for using InstallPTC services.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#f6fbfb] font-sans text-[#002525] overflow-x-hidden lg:pt-20 pt-10">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#005f5f]">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By accessing and using InstallPTC services, you agree to be bound
              by these Terms and Conditions. If you disagree with any part, you
              may not use our services.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              2. Services Description
            </h2>
            <p className="text-gray-700 mb-4">
              InstallPTC provides a pay-per-install network connecting
              advertisers with publishers. We offer:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Software installation advertising services</li>
              <li>Publisher monetization solutions</li>
              <li>Campaign management tools</li>
              <li>Analytics and reporting</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              3. User Accounts
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You must be at least 18 years old to create an account</li>
              <li>You are responsible for maintaining account security</li>
              <li>You must provide accurate and complete information</li>
              <li>
                We reserve the right to suspend or terminate accounts for
                violations
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              4. Payment Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Advertisers agree to pay for services as specified in their
                campaigns
              </li>
              <li>
                Publishers will receive payments according to the agreed rates
              </li>
              <li>Minimum payout thresholds apply for publishers</li>
              <li>
                All payments are processed through secure payment gateways
              </li>
              <li>
                We reserve the right to change pricing with 30 days notice
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              5. Prohibited Activities
            </h2>
            <p className="text-gray-700 mb-4">Users are prohibited from:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Using fraudulent installation methods</li>
              <li>Distributing malware or harmful software</li>
              <li>Violating intellectual property rights</li>
              <li>Engaging in spam or deceptive practices</li>
              <li>Attempting to circumvent security measures</li>
              <li>Violating any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              6. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4">
              All content, trademarks, and data on our platform, including but
              not limited to software, text, graphics, and logos, are the
              property of InstallPTC or its licensors and are protected by
              intellectual property laws.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              7. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 mb-4">
              Our services are provided "as is" without warranties of any kind,
              either express or implied. We do not guarantee uninterrupted or
              error-free service.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">
              InstallPTC shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use of or inability to use our services.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              9. Termination
            </h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your account immediately, without
              prior notice, for conduct that we believe violates these Terms or
              is harmful to other users, us, or third parties.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              10. Changes to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. We will
              notify users of significant changes via email or platform
              notifications.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              11. Contact Information
            </h2>
            <p className="text-gray-700 mb-2">
              For questions about these Terms, contact us at:
            </p>
            <p className="text-[#008888] font-medium">support@installptc.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
