/*  ─────────────────────────────────────────────
    src/app/advisor/[id]/page.tsx
    Next‑14 ‑ Client Component
    ───────────────────────────────────────────── */
    'use client';

    import Link from 'next/link';
    import { notFound, Metadata } from 'next/navigation';
    import {
      ArrowLeft,
      Calendar,
      CheckCircle,
      Mail,
      MapPin,
      Phone,
      Star,
      Video,
    } from 'lucide-react';
    
    import { useState } from 'react';
    
    import { mockAdvisors } from '@/data/mock-advisors';
    import { AspectRatio } from '@/components/ui/aspect-ratio';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { SocialLinks } from '@/components/social-links';
    import { TestimonialCard } from '@/components/testimonial-card';
    import { BlogPost } from '@/components/blog-post';
    import { Advisor } from '@/types/advisor';
    
    /* ---------- local placeholders ---------- */
    interface Article {
      id: string;
      image: string;
      date: string;
      title: string;
      description: string;
    }
    
    const sampleBlogs: Article[] = [
      {
        id: '1',
        image: '/images/mutual-fund.jpg',
        date: 'June 15, 2023',
        title: 'Understanding Mutual Fund Expense Ratios',
        description:
          'Learn how expense ratios impact your investment returns and what to look for when choosing mutual funds.',
      },
      {
        id: '2',
        image: '/images/tax-planning.jpg',
        date: 'May 22, 2023',
        title: 'Tax Planning Strategies for High‑Income Professionals',
        description:
          'Discover effective tax planning strategies specifically designed for doctors, lawyers, and other high‑income professionals.',
      },
      {
        id: '3',
        image: '/images/retirement.jpg',
        date: 'April 10, 2023',
        title: 'Retirement Planning in Your 40s: What You Need to Know',
        description:
          "It's never too late to start planning for retirement. Here's what you should focus on if you're beginning in your 40s.",
      },
    ];
    
    /* ---------- types you referenced but TS didn't know ---------- */
    interface ExtendedAdvisor extends Advisor {
      advisorName: string;
      firmName: string;
      photo: string;
      tagline: string;
      about: string;
      verifiedBySpring: boolean;
      services: string[];
      rating: number;
      reviewCount: number;
      availability: string;
      hourlyRate: number;
      audience: string[];
      socialMedia?: {
        twitter?: string;
        linkedin?: string;
        website?: string;
      };
      contactDetails?: {
        email?: string;
        phone?: string;
        calendlyLink?: string;
      };
      testimonials?: {
        name: string;
        role: string;
        content: string;
        rating: number;
      }[];
    }
    
    /* ---------- fee + credential stubs ---------- */
    const feeStructure = [
      { service: 'Financial Planning', amount: '₹15,000 – ₹35,000' },
      { service: 'Investment Management', amount: '0.75 % – 1.25 % of AUM' },
      { service: 'Hourly Consultation', amount: '₹2,500/hour' },
    ];
    
    const credentials = [
      'Certified Financial Planner (CFP)',
      'Chartered Financial Analyst (CFA)',
      'Licensed Insurance Professional',
      'MBA in Finance',
    ];
    
    /* ---------- page component ---------- */
    export default function AdvisorDetailPage({
      params,
    }: {
      params: { id: string };
    }) {
      const advisor = mockAdvisors.find(
        (a) => a.id === params.id,
      ) as ExtendedAdvisor | undefined;
    
      if (!advisor) notFound();
    
      /* derived data */
      const {
        email = 'contact@example.com',
        phone = '(555) 123‑4567',
        calendlyLink,
      } = advisor.contactDetails ?? {};
    
      const address = advisor.location ?? 'Location not specified';
    
      const services =
        advisor.services?.map((s) => ({
          name: s,
          description: `Professional ${s} services tailored to your needs.`,
        })) ?? [];
    
      const yearsExperience = 10;
      const philosophy =
        advisor.about ??
        'Our approach is centered around understanding your unique financial situation and goals.';
      const approach =
        advisor.tagline ??
        'We believe in a personalized approach to financial planning.';
    
      const advisorVideo =
        advisor.id === '1'
          ? 'https://www.youtube.com/embed/JWcG7FCQu1w'
          : advisor.id === '2'
          ? 'https://www.youtube.com/embed/TvnX-xEjQYk'
          : null;
    
      /* ---------- JSX ---------- */
      return (
        <div className="bg-gray-50 min-h-screen pb-12">
          {/* header  */}
          <div className="bg-[#FCFFFE] border-b border-gray-200 pb-6">
            <div className="max-w-7xl mx-auto px-4 pt-8">
              <Link
                href="/"
                className="inline-flex items-center text-spring-green hover:text-opacity-80 mb-6"
              >
                <ArrowLeft className="mr-1" size={16} />
                Back to Advisors
              </Link>
    
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* photo */}
                    <div className="md:w-1/3">
                      <AspectRatio
                        ratio={4 / 3}
                        className="rounded-lg overflow-hidden bg-gray-100 shadow-md"
                      >
                        <img
                          src={advisor.photo}
                          alt={advisor.advisorName}
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </div>
    
                    {/* info */}
                    <div className="md:w-2/3">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h1 className="text-3xl font-bold text-[#272A2B]">
                          {advisor.firmName}
                        </h1>
                        {advisor.verifiedBySpring && (
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-spring-green">
                            <CheckCircle size={14} className="mr-1" />
                            Verified by Spring
                          </span>
                        )}
                      </div>
    
                      <h2 className="text-xl text-gray-600 mb-4">
                        {advisor.advisorName}
                      </h2>
    
                      <div className="flex items-center text-gray-500 mb-6">
                        <MapPin size={16} className="mr-1" />
                        {address}
                      </div>
    
                      <p className="text-gray-700 mb-6">{advisor.about}</p>
    
                      <div className="flex flex-wrap gap-2 mb-6">
                        {advisor.specializations.map((spec) => (
                          <span
                            key={spec}
                            className="inline-flex items-center rounded-full bg-spring-green px-2.5 py-0.5 text-xs font-semibold text-white"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
    
                      <div className="flex flex-wrap gap-4">
                        <Button asChild>
                          <a href={`mailto:${email}`}>
                            <Mail size={16} className="mr-2" />
                            Contact via Email
                          </a>
                        </Button>
    
                        {phone && (
                          <Button variant="outline" asChild>
                            <a href={`tel:${phone}`}>
                              <Phone size={16} className="mr-2" />
                              Call Advisor
                            </a>
                          </Button>
                        )}
    
                        {calendlyLink && (
                          <Button variant="secondary" asChild>
                            <a href={calendlyLink} target="_blank" rel="noreferrer">
                              <Calendar size={16} className="mr-2" />
                              Schedule Meeting
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
    
          {/* main */}
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* ── left column ── */}
              <div className="lg:col-span-2">
                {/* intro video */}
                {advisorVideo && (
                  <Card className="mb-8">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center text-2xl font-semibold text-[#272A2B]">
                        <Video size={24} className="mr-2 text-spring-green" />
                        Meet&nbsp;{advisor.advisorName}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <AspectRatio ratio={16 / 9} className="rounded-md overflow-hidden">
                        <iframe
                          src={advisorVideo}
                          title={`${advisor.advisorName} intro`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </CardContent>
                  </Card>
                )}
    
                {/* services */}
                <Card className="mb-8">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-semibold text-[#272A2B]">
                      Services Offered
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {services.map((s) => (
                        <div key={s.name} className="flex gap-3">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-spring-green">
                            ✓
                          </div>
                          <div>
                            <h3 className="font-medium text-[#272A2B]">
                              {s.name}
                            </h3>
                            <p className="text-sm text-gray-500">{s.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
    
                {/* about */}
                <Card className="mb-8">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-semibold text-[#272A2B]">
                      About {advisor.firmName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      With {yearsExperience}+ years of experience,{' '}
                      {advisor.advisorName} has helped countless clients craft
                      winning financial road‑maps.
                    </p>
                    <p className="mb-4">{philosophy}</p>
                    <p>{approach}</p>
                  </CardContent>
                </Card>
    
                {/* client personas */}
                <Card className="mb-8">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-semibold text-[#272A2B]">
                      Ideal Clients
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {advisor.audience.map((aud) => (
                        <div
                          key={aud}
                          className="bg-gray-50 rounded-lg p-4 flex items-center"
                        >
                          <span className="mr-3">👤</span>
                          {aud}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
    
                {/* testimonials */}
                {!!advisor.testimonials?.length && (
                  <>
                    <h2 className="text-2xl font-semibold mb-4 text-[#272A2B]">
                      Client Testimonials
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {advisor.testimonials.map((t) => (
                        <TestimonialCard key={t.name} testimonial={t} />
                      ))}
                    </div>
                  </>
                )}
    
                {/* blog posts */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold text-[#272A2B]">
                      Latest Articles
                    </h2>
                    <Link
                      href={`/advisor/${advisor.id}/blogs`}
                      className="text-spring-green hover:underline text-sm font-medium"
                    >
                      View all
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleBlogs.map((p) => (
                      <BlogPost key={p.id} post={p} />
                    ))}
                  </div>
                </div>
              </div>
    
              {/* ── right column ── */}
              <div className="space-y-6">
                {/* contact */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-[#272A2B]">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-spring-green mt-0.5 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <a
                          href={`mailto:${email}`}
                          className="text-spring-green hover:underline"
                        >
                          {email}
                        </a>
                      </div>
                    </div>
    
                    {phone && (
                      <div className="flex items-start">
                        <Phone className="w-5 h-5 text-spring-green mt-0.5 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <a
                            href={`tel:${phone}`}
                            className="hover:underline text-[#272A2B]"
                          >
                            {phone}
                          </a>
                        </div>
                      </div>
                    )}
    
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-spring-green mt-0.5 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Office Location</p>
                        <address className="not-italic text-[#272A2B]">
                          {address}
                        </address>
                      </div>
                    </div>
    
                    {/* socials */}
                    {advisor.socialMedia && (
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500 mb-3">
                          Connect with {advisor.advisorName}
                        </p>
                        <SocialLinks socialMedia={advisor.socialMedia} />
                      </div>
                    )}
                  </CardContent>
                </Card>
    
                {/* fee structure */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-[#272A2B]">
                      Fee Structure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {feeStructure.map((fee) => (
                      <div
                        key={fee.service}
                        className="flex justify-between text-sm mb-2"
                      >
                        <span>{fee.service}</span>
                        <span className="font-medium">{fee.amount}</span>
                      </div>
                    ))}
                    <p className="text-xs text-gray-500 mt-4">
                      * Fees may vary based on complexity and scope of work
                    </p>
                  </CardContent>
                </Card>
    
                {/* credentials */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-[#272A2B]">
                      Credentials
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {credentials.map((cred) => (
                        <li key={cred} className="flex items-center">
                          <span className="mr-2 text-spring-green">✔︎</span>
                          {cred}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      );
    }
    