
import React from 'react';
import { Search, Code, TrendingUp, MousePointer2, Users, Target } from 'lucide-react';

export const services = [
  {
    slug: "web-engineering",
    icon: <Code className="w-6 h-6 text-purple-400" />,
    title: "Fast Websites",
    description: "We build websites that load in less than a second. If your site is slow, you are losing customers. We fix this by making your site lightning fast on every device.",
    outcome: "Instant loading & more sales.",
    longDescription: "Your website is your online storefront. If it's slow or hard to use, people will leave and go to your competitors. We build high-performance websites that are easy for your customers to use and even easier for them to buy from. We focus on speed, simple design, and making sure your site works perfectly on mobile phones.",
    features: [
      "Super Fast Loading Times",
      "Easy to Use on Mobile Phones",
      "Simple & Clean Design",
      "Built to Turn Visitors into Customers",
      "Secure & Reliable Setup"
    ],
    benefits: [
      "Keep more visitors on your site",
      "Look professional and trustworthy",
      "Get more calls and emails from your site",
      "A website that grows with your business"
    ]
  },
  {
    slug: "aggressive-seo",
    icon: <Search className="w-6 h-6 text-indigo-400" />,
    title: "#1 Google Ranking",
    description: "We help your business show up at the very top of Google. If people can't find you, they can't buy from you. We make you visible to the right customers.",
    outcome: "Top rankings for your best services.",
    longDescription: "SEO is about making sure Google knows you are the best choice for your customers. We don't just 'do SEO'—we help you dominate your local market. We find the exact words your customers are typing into Google and make sure your business is the first thing they see. No more being invisible online.",
    features: [
      "Find the Best Keywords for Your Business",
      "Fix Technical Issues on Your Site",
      "Get Your Business on Google Maps",
      "Write Content That Customers Love",
      "Beat Your Competitors in Search Results"
    ],
    benefits: [
      "Get a steady stream of new customers",
      "Build trust with a top Google ranking",
      "Save money on expensive ads",
      "Be the go-to business in your area"
    ]
  },
  {
    slug: "ppc-management",
    icon: <Target className="w-6 h-6 text-pink-400" />,
    title: "Profitable Ads",
    description: "Stop wasting money on ads that don't work. We manage your Google and Facebook ads to make sure every dollar you spend brings back more profit.",
    outcome: "More leads for less money.",
    longDescription: "Running ads can be expensive if you don't know what you're doing. We take the guesswork out of advertising. We target the exact people who are looking for your services right now. We focus on making you a profit, not just getting you clicks. We track everything so you know exactly where your money is going.",
    features: [
      "Google & Facebook Ad Management",
      "Target the Right Customers",
      "Write Ads That Get Clicks",
      "Track Every Lead & Sale",
      "Constant Testing to Improve Results"
    ],
    benefits: [
      "Get new leads almost instantly",
      "Only pay for ads that actually work",
      "Scale your business predictably",
      "Clear reports on your ad profit"
    ]
  },
  {
    slug: "social-growth",
    icon: <Users className="w-6 h-6 text-blue-400" />,
    title: "Social Media Growth",
    description: "We help you find and connect with your perfect customers on social media. We turn followers into fans and fans into paying customers.",
    outcome: "More fans & better brand awareness.",
    longDescription: "Social media is where your customers spend their time. We help you show up there with content that stops the scroll. We don't just post for the sake of posting; we build a strategy that gets people talking about your brand and eventually buying from you. We make social media work for your business.",
    features: [
      "Social Media Strategy That Works",
      "Content That People Want to Share",
      "Engage with Your Customers Directly",
      "Find Your Perfect Audience",
      "Grow Your Following the Right Way"
    ],
    benefits: [
      "Build a loyal community of customers",
      "Increase trust in your brand",
      "Get free word-of-mouth marketing",
      "Stay top-of-mind for your customers"
    ]
  },
  {
    slug: "growth-strategy",
    icon: <TrendingUp className="w-6 h-6 text-teal-400" />,
    title: "Growth Roadmap",
    description: "We give you a clear plan to grow your business. No more guessing. We use data to show you exactly what to do next to double your sales.",
    outcome: "A clear path to 2x-5x growth.",
    longDescription: "Most businesses struggle to grow because they don't have a plan. They try a little bit of everything and hope something works. We provide a clear, step-by-step roadmap for your digital growth. We analyze your business, find the biggest opportunities, and show you exactly how to scale your revenue predictably.",
    features: [
      "In-Depth Business Analysis",
      "Understand Your Perfect Customer",
      "Step-by-Step Marketing Plan",
      "Data-Driven Growth Modeling",
      "Regular Updates on Your Progress"
    ],
    benefits: [
      "Stop wasting money on bad marketing",
      "Know exactly what to do to grow",
      "Get everyone on your team on the same page",
      "Grow your business with confidence"
    ]
  },
  {
    slug: "conversion-optimization",
    icon: <MousePointer2 className="w-6 h-6 text-orange-400" />,
    title: "Turn Visitors into Sales",
    description: "We help you get more sales from the people already visiting your site. We fix the 'leaky bucket' so you don't lose potential customers.",
    outcome: "More sales from your current traffic.",
    longDescription: "Getting people to your site is only half the battle. If they don't buy, you've wasted your effort. We study how people use your site and find out why they aren't buying. Then, we fix it. We make it as easy as possible for your visitors to become paying customers, increasing your revenue without needing more traffic.",
    features: [
      "See How People Use Your Site",
      "Test Different Designs to See What Works",
      "Make Your Checkout Process Simple",
      "Write Better Headlines & Buttons",
      "Fix Issues That Stop People from Buying"
    ],
    benefits: [
      "Make more money from your current visitors",
      "Lower your cost to get a new customer",
      "Understand your customers better",
      "Provide a better experience for your users"
    ]
  }
];
