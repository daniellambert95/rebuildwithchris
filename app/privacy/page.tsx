import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — RebuildWithChris",
  description: "How RebuildWithChris collects, uses, and protects your personal data.",
};

const sections = [
  {
    title: "Who We Are",
    body: `RebuildWithChris is operated by Chris Jenkins, a recovery coach based in Europe. This website exists to provide information about the 12-week cocaine recovery programme and to allow individuals to make enquiries or submit self-assessment results.

For any privacy-related questions, you can contact Chris directly via the contact form on this website.`,
  },
  {
    title: "What Data We Collect",
    body: `We only collect personal data that you voluntarily provide to us. This includes:

• Your name and email address when you submit the contact form or self-assessment form
• Your telephone number if you provide it in the contact form
• Your message or enquiry content
• Your self-assessment responses (if you choose to submit them)

We do not use tracking cookies, analytics platforms, or third-party advertising scripts.`,
  },
  {
    title: "Why We Collect It",
    body: `Your data is collected solely to allow Chris Jenkins to respond to your enquiry or follow up on your self-assessment submission. It is not used for marketing, sold to third parties, or shared with anyone outside of this service.

The legal basis for processing your data is your explicit consent, given when you tick the privacy policy checkbox and submit a form on this website.`,
  },
  {
    title: "How Your Data Is Used",
    body: `Information submitted through this website is sent via email to Chris Jenkins. It is used only to:

• Respond to your direct enquiry
• Follow up on a self-assessment submission if you have requested support
• Arrange a consultation call if requested

Your data will not be used for any other purpose without your explicit consent.`,
  },
  {
    title: "Data Storage & Security",
    body: `Form submissions are transmitted via Resend, a transactional email service. Data is not stored in a database on our end beyond what is retained in email correspondence.

We take reasonable technical precautions to protect your information in transit. However, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: "How Long We Keep Your Data",
    body: `Personal data submitted via this website is retained only as long as necessary to fulfil the purpose for which it was collected — typically the duration of any coaching relationship or enquiry process.

You may request deletion of your data at any time by contacting us through the website.`,
  },
  {
    title: "Your Rights",
    body: `Under applicable data protection law (including GDPR where it applies), you have the right to:

• Access the personal data we hold about you
• Request correction of inaccurate data
• Request deletion of your data
• Withdraw consent at any time
• Lodge a complaint with your national data protection authority

To exercise any of these rights, please get in touch via the contact form on this website.`,
  },
  {
    title: "Third-Party Services",
    body: `This website uses the following third-party services:

• Resend (resend.com) — for transmitting form submissions via email. Their privacy policy applies to data processed through their platform.
• Calendly (if you use the booking feature) — their own privacy policy governs data collected through their booking system.

We do not use Google Analytics, Facebook Pixel, or any other tracking or advertising tools.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of the website after changes constitutes acceptance of the updated policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6" style={{ background: "#0d0d0b" }}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-8 transition-colors hover:text-[#c9a84c]"
            style={{ color: "#5c5040" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M10 6H2M2 6l4-4M2 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to site
          </Link>

          <p className="text-xs tracking-[0.4em] uppercase mb-2 font-semibold" style={{ color: "#8b1a1a" }}>
            Legal
          </p>
          <h1 className="font-['Bebas_Neue'] text-5xl sm:text-7xl mb-4" style={{ color: "#f0e6d3" }}>
            PRIVACY <span style={{ color: "#c9a84c" }}>POLICY</span>
          </h1>
          <div className="section-divider" />
          <p className="text-sm" style={{ color: "#5c5040" }}>
            Effective date: April 2025
          </p>
        </div>

        {/* Intro */}
        <p className="text-sm leading-relaxed mb-12" style={{ color: "#a09080" }}>
          Your privacy matters. This policy explains what personal data RebuildWithChris collects, why, and how it is handled. We keep it straightforward — no legal jargon.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s, i) => (
            <div key={i} className="border-t pt-8" style={{ borderColor: "#8b1a1a20" }}>
              <h2 className="font-['Bebas_Neue'] text-2xl tracking-wider mb-4" style={{ color: "#f0e6d3" }}>
                {i + 1}. {s.title}
              </h2>
              <div className="space-y-3">
                {s.body.split("\n\n").map((para, j) => (
                  <p key={j} className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "#a09080" }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 border-t pt-8" style={{ borderColor: "#8b1a1a20" }}>
          <p className="text-xs" style={{ color: "#5c5040" }}>
            Questions about this policy? Use the{" "}
            <Link href="/#contact" className="underline" style={{ color: "#c9a84c" }}>
              contact form
            </Link>{" "}
            and Chris will respond directly.
          </p>
        </div>
      </div>
    </div>
  );
}
