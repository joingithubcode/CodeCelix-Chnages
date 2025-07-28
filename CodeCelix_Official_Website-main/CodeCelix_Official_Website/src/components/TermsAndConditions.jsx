import React from 'react';
import { RiInformationLine } from '@remixicon/react';

const termsArray = [
  {
    title: '1. Introduction',
    description: `Welcome to CODECELIX. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.

"CODECELIX is a technology company that provides web development, mobile applications, cloud solutions, and IT consulting services. Our services are designed to help businesses transform and grow through innovative technology solutions."

If you do not agree with any part of these Terms, you must not use our services. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of any changes.`
  },
  {
    title: '2. User Responsibilities',
    description: `You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.

You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services to transmit any harmful, illegal, or offensive content.

You are responsible for ensuring that all information you provide to us is accurate, complete, and up-to-date. Any false or misleading information may result in termination of your account.

You must respect the intellectual property rights of CODECELIX and third parties. You may not copy, modify, distribute, or create derivative works from our services without explicit permission.`
  },
  {
    title: '3. Service Terms',
    description: `CODECELIX provides various technology services including web development, mobile app development, cloud solutions, data analytics, cybersecurity, and IT consulting. The specific terms for each service will be outlined in separate service agreements.

All services are provided on an "as is" and "as available" basis. We make no warranties or representations regarding the uninterrupted or error-free operation of our services.

Project timelines, deliverables, and pricing are specified in individual project agreements. Changes to project scope may result in additional charges and timeline adjustments.

We reserve the right to suspend or terminate services if payment terms are not met or if there is a breach of these Terms.`
  },
  {
    title: '4. Privacy Protection',
    description: `We are committed to protecting your privacy and personal information. Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use, and protect your information.

We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.

We do not sell, rent, or lease your personal information to third parties. We may share information only as described in our Privacy Policy or with your explicit consent.

You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise these rights.`
  },
  {
    title: '5. Intellectual Property',
    description: `All content, software, and materials provided by CODECELIX are protected by copyright, trademark, and other intellectual property laws. You may not use our intellectual property without explicit written permission.

Upon full payment for custom development services, you will receive ownership rights to the custom code and deliverables created specifically for your project, subject to any third-party licensing terms.

CODECELIX retains the right to use general methodologies, techniques, and knowledge gained during the provision of services for future projects, provided that no confidential client information is disclosed.

You grant CODECELIX a limited license to use your trademarks, logos, and brand materials solely for the purpose of providing the agreed-upon services.`
  },
  {
    title: '6. Payment Terms',
    description: `Payment terms are specified in individual project agreements. Generally, payments are due according to the agreed-upon schedule and payment methods outlined in your service agreement.

Late payments may result in service suspension and additional fees. We reserve the right to charge interest on overdue amounts at a rate of 1.5% per month or the maximum rate allowed by law.

All fees are non-refundable except as specifically stated in your service agreement. Refunds, if applicable, will be processed within 30 days of approval.

You are responsible for all taxes related to your use of our services, except for taxes based on CODECELIX's net income.`
  },
  {
    title: '7. Limitations and Disclaimers',
    description: `CODECELIX's liability is limited to the amount paid for the specific service that gave rise to the claim. We are not liable for any indirect, consequential, or punitive damages.

We make no warranties regarding the performance, reliability, or suitability of our services for any particular purpose. All services are provided "as is" without warranty of any kind.

We are not responsible for any third-party services, software, or content that may be integrated with or recommended as part of our services. You use such third-party services at your own risk.

Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of the above limitations may not apply to you.`
  },
  {
    title: '8. Termination',
    description: `Either party may terminate a service agreement with written notice as specified in the individual service agreement. Termination does not relieve you of any payment obligations for services already provided.

We may immediately terminate or suspend your access to our services if you breach these Terms, fail to make required payments, or engage in conduct that we deem harmful to our business or other users.

Upon termination, you must cease all use of our services and return or destroy any confidential information or materials provided by CODECELIX.

Provisions of these Terms that by their nature should survive termination will remain in effect, including but not limited to intellectual property rights, payment obligations, and limitation of liability.`
  },
  {
    title: '9. Governing Law',
    description: `These Terms are governed by and construed in accordance with the laws of the jurisdiction where CODECELIX is headquartered, without regard to conflict of law principles.

Any disputes arising from these Terms or your use of our services will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.

If any provision of these Terms is found to be unenforceable, the remaining provisions will continue to be valid and enforceable to the fullest extent permitted by law.

These Terms constitute the entire agreement between you and CODECELIX regarding your use of our services and supersede all prior agreements and understandings.`
  }
];

const NoticeBox = () => (
  <div className="bg-red-50 border border-red-200 rounded-xl px-6 py-5 mt-10 flex items-start gap-4 shadow-sm">
    <div className="bg-red-100 p-2 rounded-full">
      <RiInformationLine className="text-red-600 w-5 h-5" />
    </div>
    <div>
      <h3 className="text-xl font-semibold font-poppins text-red-700">Important Notice</h3>
      <p className="text-base text-gray-700 font-inter mt-1 leading-relaxed">
        These terms and conditions are subject to change. We will notify you of any significant changes via email or through our website. Your continued use of our services after such changes constitutes acceptance of the new terms. For questions about these terms, please contact our support team.
      </p>
    </div>
  </div>
);

const TermBlock = ({ title, description }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold text-[#a62c2c] font-poppins">{title}</h2>
    <p className="mt-2 text-gray-700 text-base leading-relaxed font-inter whitespace-pre-line">{description}</p>
    <hr className="mt-6 border-red-100" />
  </div>
);

const TermsAndConditions = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold font-poppins text-center text-gray-900 mb-4">Terms & Conditions</h1>
      <p className="text-base text-gray-600 text-center font-inter max-w-3xl mx-auto mb-6">
        Please read these terms and conditions carefully before using our services. These terms govern your use of CODECELIX's services and outline the rights and responsibilities of both parties.
      </p>
      <p className="text-sm text-center font-inter text-gray-500 mb-8">
        <strong>Last Updated:</strong> July 28, 2025 &nbsp; | &nbsp;
        <strong>Effective Date:</strong> July 28, 2025
      </p>

      {termsArray.map((item, idx) => (
        <TermBlock key={idx} title={item.title} description={item.description} />
      ))}

      <NoticeBox />
    </main>
  );
};

export default TermsAndConditions;
