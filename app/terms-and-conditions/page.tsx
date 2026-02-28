import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  DollarSign,
  Users,
  AlertCircle,
  FileText,
  Mail,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Terms & Conditions | Adsnes",
  description:
    "Terms and Conditions for using Adsnes performance advertising network services. Learn about your rights and obligations as an advertiser or publisher.",
};

export default function TermsAndConditions() {
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
            Terms & <span className="text-gradient-primary">Conditions</span>
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
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#008888]" size={24} />
              <h2 className="text-2xl font-bold text-[#008888]">
                1. Acceptance of Terms
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using Adsnes services, you agree to be bound by
              these Terms and Conditions. If you disagree with any part, you may
              not use our services. These terms constitute a legally binding
              agreement between you and Adsnes.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-[#008888]" size={24} />
              <h2 className="text-2xl font-bold text-[#008888]">
                2. Services Description
              </h2>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Adsnes provides a performance-based advertising network connecting
              advertisers with publishers. We offer:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>CPC (Cost Per Click) campaign management</li>
              <li>CPI (Cost Per Install) advertising services</li>
              <li>CPM (Cost Per Impression) display advertising</li>
              <li>Publisher monetization solutions</li>
              <li>Real-time analytics and performance tracking</li>
              <li>Advanced targeting options (geo, device, OS)</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-[#008888]" size={24} />
              <h2 className="text-2xl font-bold text-[#008888]">
                3. User Accounts
              </h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You must be at least 18 years old to create an account</li>
              <li>
                You are responsible for maintaining account security and
                confidentiality
              </li>
              <li>You must provide accurate and complete information</li>
              <li>Each user may maintain only one account</li>
              <li>
                We reserve the right to verify your identity and information
              </li>
              <li>
                We may suspend or terminate accounts for violations without
                prior notice
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="text-[#008888]" size={24} />
              <h2 className="text-2xl font-bold text-[#008888]">
                4. Payment Terms
              </h2>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#005f5f]">For Advertisers:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Agree to pay for services as specified in their campaigns
                </li>
                <li>Campaigns require prepayment or valid payment method</li>
                <li>Unused funds are refundable upon request</li>
              </ul>

              <h3 className="font-bold text-[#005f5f] mt-4">For Publishers:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Earnings are calculated based on valid clicks, installs, or
                  impressions
                </li>
                <li>Minimum payout threshold: $50 for most payment methods</li>
                <li>Payments processed weekly or monthly based on agreement</li>
                <li>
                  Payment methods include bank transfer, Payoneer, and crypto
                  options
                </li>
              </ul>

              <h3 className="font-bold text-[#005f5f] mt-4">General Terms:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>All payments processed through secure payment gateways</li>
                <li>
                  We reserve the right to change pricing with 30 days notice
                </li>
                <li>
                  Invalid or fraudulent activities will result in payment
                  withholding
                </li>
                <li>Taxes and fees are the responsibility of the user</li>
              </ul>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="text-[#008888]" size={24} />
              <h2 className="text-2xl font-bold text-[#008888]">
                5. Prohibited Activities
              </h2>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Users are strictly prohibited from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Using fraudulent or incentivized traffic sources</li>
              <li>Generating fake clicks, installs, or impressions</li>
              <li>Distributing malware, viruses, or harmful software</li>
              <li>Violating intellectual property rights</li>
              <li>Engaging in spam, deceptive, or misleading practices</li>
              <li>
                Attempting to circumvent security or fraud detection systems
              </li>
              <li>Using automated bots or scripts</li>
              <li>Violating any applicable laws or regulations</li>
              <li>Promoting illegal content or activities</li>
            </ul>
            <p className="text-red-600 mt-4 text-sm">
              Violation of these terms may result in immediate account
              termination and forfeiture of earnings.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              6. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              All content, trademarks, and data on our platform, including but
              not limited to software, text, graphics, logos, and analytics
              tools, are the property of Adsnes or its licensors and are
              protected by international intellectual property laws.
            </p>
            <p className="text-gray-700">
              Users may not copy, modify, distribute, or reverse engineer any
              part of our platform without explicit written permission.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              7. Fraud Prevention and Monitoring
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Adsnes employs advanced fraud detection systems to ensure traffic
              quality and protect all users. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Monitor all traffic and activity in real-time</li>
              <li>Flag and investigate suspicious activities</li>
              <li>Withhold payments during fraud investigations</li>
              <li>Reverse invalid clicks, installs, or impressions</li>
              <li>Terminate accounts found engaging in fraudulent activity</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              8. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our services are provided "as is" and "as available" without
              warranties of any kind, either express or implied. We do not
              guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Uninterrupted or error-free service</li>
              <li>Specific results or earnings</li>
              <li>Accuracy of analytics or reporting</li>
              <li>Compatibility with all systems or browsers</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              To the maximum extent permitted by law, Adsnes shall not be liable
              for any:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Indirect, incidental, special, consequential damages</li>
              <li>Loss of profits, revenue, or data</li>
              <li>Business interruption</li>
              <li>Damages resulting from third-party conduct</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Our total liability shall not exceed the amount paid by you to us
              in the 12 months preceding the claim.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              10. Termination
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We may terminate or suspend your account immediately, without
              prior notice, for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Violations of these Terms</li>
              <li>Fraudulent or illegal activities</li>
              <li>Harmful conduct affecting other users or our platform</li>
              <li>Extended periods of inactivity</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Upon termination, your right to use our services ceases
              immediately. Outstanding payments may be processed subject to
              fraud review.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              11. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction where Adsnes operates, without regard
              to its conflict of law provisions.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#008888]">
              12. Changes to Terms
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We reserve the right to modify these terms at any time. We will
              notify users of significant changes via:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Email notification</li>
              <li>Platform announcements</li>
              <li>Website notice</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Continued use of our services after changes constitutes acceptance
              of the modified terms.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-[#66b2b2]/30 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-[#008888]" size={24} />
              <h2 className="text-2xl font-bold text-[#008888]">
                13. Contact Information
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              For questions about these Terms, please contact us:
            </p>
            <div className="bg-[#f6fbfb] p-6 rounded-xl">
              <p className="text-[#008888] font-medium mb-2">Email:</p>
              <a
                href="mailto:support@adsnes.com"
                className="text-[#014d4e] hover:text-[#008888] transition-colors block mb-4"
              >
                support@adsnes.com
              </a>

              <p className="text-[#008888] font-medium mb-2">
                Support Channels:
              </p>
              <div className="flex flex-wrap gap-4">
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
                <a
                  href="https://teams.live.com/l/invite/FEAuBJ3mJFY77lw4QE?v=g1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#014d4e] hover:text-[#008888] transition-colors"
                >
                  Teams
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
