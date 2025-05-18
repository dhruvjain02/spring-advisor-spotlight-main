'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const OnboardingForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-[#108E66] hover:text-opacity-80 mb-6">
          <ArrowLeft size={16} className="mr-1" />
          Back to Marketplace
        </Link>

        <div className="rounded-lg border border-gray-200 bg-[#FCFFFE] shadow-sm">
          <div className="text-center p-6 pb-0">
            <h1 className="text-3xl font-bold text-[#272A2B]">List Your Advisory Practice</h1>
            <p className="text-lg text-gray-600 mt-2">
              Join the Spring Money advisor network and connect with clients who value trusted financial guidance
            </p>
          </div>

          <div className="p-6">
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-medium mb-4 text-[#272A2B]">Why join Spring Money&apos;s RIA Marketplace?</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: 'Targeted Visibility',
                    desc: 'Reach clients specifically looking for registered advisors',
                  },
                  {
                    title: 'Trust Badge',
                    desc: 'Spring Money verification increases client confidence',
                  },
                  {
                    title: 'Quality Leads',
                    desc: 'Connect with financially educated clients',
                  },
                  {
                    title: 'Professional Profile',
                    desc: 'Showcase your expertise and services',
                  },
                ].map((item, index) => (
                  <div className="flex gap-3" key={index}>
                    <div className="h-10 w-10 rounded-full bg-[#108E66] flex items-center justify-center text-[#FCFFFE] font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#272A2B]">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="mb-6 text-[#272A2B]">
                Complete this form to apply for listing on Spring Money&apos;s advisor marketplace. Our team will review your application and get in touch with next steps.
              </p>

              <button className="h-11 px-8 py-2 rounded-md bg-[#108E66] text-[#FCFFFE] font-medium shadow hover:bg-opacity-90 transition-colors">
                Apply to Join
              </button>

              <p className="mt-4 text-sm text-gray-500">
                By applying, you agree to Spring Money&apos;s{' '}
                <a href="#" className="underline hover:text-[#108E66]">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="underline hover:text-[#108E66]">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
