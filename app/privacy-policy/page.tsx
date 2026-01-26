import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | InstallPTC",
  description:
    "Privacy Policy for InstallPTC - Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f6fbfb] font-sans text-[#002525] overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#008888] hover:text-[#014d4e] font-medium transition-colors group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#005f5f]">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We collect information to provide better services to all our
              users. The types of information we collect include:
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

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
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
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
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
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              4. Data Security
            </h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, no method
              of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
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
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
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
                  cannot be disabled.
                </p>
              </div>
              <div className="bg-[#f6fbfb] p-4 rounded-lg">
                <h4 className="font-bold text-[#008888] mb-2">
                  Analytics Cookies
                </h4>
                <p className="text-gray-700 text-sm">
                  Collect anonymous information about how visitors use our
                  website to help us improve it.
                </p>
              </div>
              <div className="bg-[#f6fbfb] p-4 rounded-lg">
                <h4 className="font-bold text-[#008888] mb-2">
                  Marketing Cookies
                </h4>
                <p className="text-gray-700 text-sm">
                  Track visitors across websites to display relevant
                  advertisements.
                </p>
              </div>
              <div className="bg-[#f6fbfb] p-4 rounded-lg">
                <h4 className="font-bold text-[#008888] mb-2">
                  Functional Cookies
                </h4>
                <p className="text-gray-700 text-sm">
                  Remember your preferences to provide enhanced features.
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
              You can manage your cookie preferences at any time by clicking the
              "Cookie Settings" link in the footer of our website.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              7. Contact Us
            </h2>
            <p className="text-gray-700 mb-2">
              If you have questions about this Privacy Policy, please contact us
              at:
            </p>
            <p className="text-[#008888] font-medium">support@installptc.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
