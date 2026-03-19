
import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

// Lazy initialization for nodemailer transporter
let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    const SMTP_HOST = (process.env.SMTP_HOST || "smtp.gmail.com").trim();
    const SMTP_PORT = (process.env.SMTP_PORT || "587").trim();
    const SMTP_USER = (process.env.SMTP_USER || "").trim();
    const SMTP_PASS = (process.env.SMTP_PASS || "").trim();
    
    if (!SMTP_USER || !SMTP_PASS) {
      console.warn("[SMTP] Missing SMTP_USER or SMTP_PASS. Email sending will be skipped.");
      return null;
    }

    console.log(`[SMTP] Initializing for ${SMTP_HOST} (User: ${SMTP_USER})`);

    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: SMTP_PORT === "465",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      debug: process.env.NODE_ENV !== "production",
      logger: process.env.NODE_ENV !== "production"
    });
  }
  return transporter;
}

// Mock Database / Data
const blogPosts = [
  {
    id: "seo-strategy-2026",
    category: "SEO Strategy",
    title: "How to Rank Your Local Business #1 on Google in 2026 (Simple Guide)",
    author: "Sufi (Growth Lead)",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Stop losing customers to your competitors. Learn how to get your business on the first page of Google so people can actually find you.",
    content: `
      <h2>Why Your Business is Invisible on Google</h2>
      <p>Every day, people in your city are searching for the services you offer. If they don't see your name on the first page, they are clicking on your competitors instead. You don't have a traffic problem; you have a visibility problem. We fix this by making sure Google trusts your business enough to show it at the very top.</p>
      
      <h3>How We Get You to #1</h3>
      <div class="blog-image-container">
        <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80" alt="Google Search Results" referrerPolicy="no-referrer" />
        <p class="image-caption">We focus on the metrics that actually move you up the rankings.</p>
      </div>
      <p>Google wants to give its users the best experience. To win, your site needs to be fast, easy to read, and full of the information people are looking for. We don't use "tricks" that get you banned. We use proven strategies that Google loves.</p>
      
      <h3>3 Simple Fixes for Your Ranking</h3>
      <ol>
        <li><strong>Fix Your Google Map Listing:</strong> Most businesses have wrong info on their map listing. We clean this up so local customers can find your phone number and address instantly.</li>
        <div class="blog-image-container">
          <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80" alt="Local Map Listing" referrerPolicy="no-referrer" />
          <p class="image-caption">A clean map listing is the fastest way to get local calls.</p>
        </div>
        <li><strong>Answer Customer Questions:</strong> Instead of using big words, we write content that answers the exact questions your customers are asking. This makes Google see you as an expert.</li>
        <li><strong>Use Simple Keywords:</strong> Don't use fancy industry jargon. Use the words your customers actually type into Google, like "best plumber near me" or "affordable web design."</li>
      </ol>
      <p>Ready to dominate your local market? Check out our <a href="/services/aggressive-seo" class="text-indigo-400 font-bold">Aggressive SEO Services</a>.</p>
    `,
    target: "aggressive-seo"
  },
  {
    id: "site-speed-sales",
    category: "Web Development",
    title: "Why a Slow Website is Costing You Money (And How to Fix It)",
    author: "SF Engineering Team",
    date: "April 02, 2026",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    excerpt: "If your site is slow, you are literally throwing money away. Learn how to make your site lightning fast and keep your customers happy.",
    content: `
      <h2>The Cost of a Slow Website</h2>
      <p>People today have zero patience. If your site takes more than a few seconds to load, they will leave and never come back. This isn't just a tech issue; it's a sales issue. A slow site makes your business look old and unreliable.</p>
      
      <h3>Speed Builds Trust</h3>
      <div class="blog-image-container">
        <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=1200&q=80" alt="Website Speed Test" referrerPolicy="no-referrer" />
        <p class="image-caption">A fast site tells customers that you are professional and efficient.</p>
      </div>
      <p>When your site is snappy and fast, customers feel confident. They can find what they need without frustration. We build "Web Engineering" solutions that load instantly, ensuring you keep every single lead that clicks on your site.</p>
      
      <h3>How We Fix Your Slow Site</h3>
      <div class="blog-image-container">
        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80" alt="Mobile Optimization" referrerPolicy="no-referrer" />
        <p class="image-caption">We optimize for phones first, because that's where your customers are.</p>
      </div>
      <p>We don't use heavy, old-fashioned website builders that slow everything down. We use modern "Web Engineering" techniques that only load what is necessary. This makes your site fast on both phones and computers.</p>
      
      <p>Ready for a website that actually works? See our <a href="/services/web-engineering" class="text-indigo-400 font-bold">Web Engineering Services</a>.</p>
    `,
    target: "web-engineering"
  },
  {
    id: "profitable-ads",
    category: "Advertising",
    title: "How to Run Google Ads That Actually Make a Profit",
    author: "Ad-Ops Specialist",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Stop wasting money on ads that don't bring in sales. Learn how to target the right people and grow your profit.",
    content: `
      <h2>Why Your Ads Aren't Working</h2>
      <p>Many businesses spend thousands on Google Ads but get nothing in return. Usually, it's because they are paying for the wrong clicks. If you target broad words like "shoes," you'll get people just looking, not buying. We target "intent"—people who are ready to buy right now.</p>
      
      <h3>The Secret to Profitable Ads</h3>
      <div class="blog-image-container">
        <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80" alt="Digital Marketing Ads" referrerPolicy="no-referrer" />
        <p class="image-caption">We only pay for clicks that have a high chance of becoming customers.</p>
      </div>
      <p>We don't just set up your ads and walk away. We constantly watch the data to see what's working. If an ad isn't making you money, we kill it. If it is, we scale it. This ensures your marketing budget is an investment, not an expense.</p>
      
      <h3>How We Scale Your Sales</h3>
      <div class="blog-image-container">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" alt="Conversion Funnel" referrerPolicy="no-referrer" />
        <p class="image-caption">We build a clear path from the first click to the final sale.</p>
      </div>
      <p>Once you find an ad that works, you can slowly increase your budget to get more customers. We use data to make sure every dollar you spend brings back more than a dollar in profit. This is how you grow a business predictably.</p>
      
      <p>Want us to manage your ads? Check out our <a href="/services/ppc-management" class="text-indigo-400 font-bold">PPC Management Services</a>.</p>
    `,
    target: "ppc-management"
  }
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    image: "https://i.pravatar.cc/150?u=sarah",
    content: "SF Growth completely transformed our online presence. Our traffic grew by 300% in 4 months after their SEO overhaul.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Founder of UrbanStyle",
    image: "https://i.pravatar.cc/150?u=marcus",
    content: "The custom dashboard they built for us is a work of art. High-performance code that actually delivers sales.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director at GlobaLync",
    image: "https://i.pravatar.cc/150?u=elena",
    content: "Professional, data-driven, and incredibly responsive. They are the only agency we trust with our digital strategy.",
    rating: 5
  }
];

// API Routes
app.get("/api/posts", (req, res) => {
  res.json(blogPosts);
});

app.get("/api/testimonials", (req, res) => {
  res.json(testimonials);
});

app.get("/api/posts/:id", (req, res) => {
  const post = blogPosts.find(p => p.id === req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, service, budget, message } = req.body;
    
    console.log("New Contact Form Submission:", { name, email, service, budget, message });
    
    const mailTransporter = getTransporter();
    const contactEmail = process.env.CONTACT_EMAIL || "dmwithsufi@gmail.com";

    if (mailTransporter) {
      try {
        await mailTransporter.sendMail({
          from: `"SF Growth Agency" <${process.env.SMTP_USER || "dmwithsufi@gmail.com"}>`,
          to: contactEmail,
          subject: `New Growth Inquiry: ${service} from ${name}`,
          text: `
            New Contact Form Submission:
            
            Name: ${name}
            Email: ${email}
            Service: ${service}
            Budget: ${budget}
            Message: ${message}
          `,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #4f46e5;">New Growth Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Budget:</strong> ${budget}</p>
              <p><strong>Message:</strong></p>
              <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          `,
        });
        console.log("Email sent successfully to", contactEmail);
      } catch (emailError: any) {
        console.error("Error sending email:", emailError);
        return res.status(500).json({ 
          error: "Failed to send email. Please try again later.",
          details: emailError.message 
        });
      }
    } else {
      console.log("Skipping email send due to missing SMTP config.");
      return res.status(500).json({ error: "Email service not configured." });
    }
    
    res.json({ success: true, message: "Inquiry received. Our growth team will contact you shortly." });
  } catch (err: any) {
    console.error("Contact API error:", err);
    res.status(500).json({ error: "Internal server error", details: err.message });
  }
});

export default app;
