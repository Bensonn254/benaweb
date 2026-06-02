const posts = [
  {
    slug: 'kenyan-sme-mobile-first-website',
    title: 'Why every modern SME needs a mobile-first website in 2025',
    date: '10 Mar, 2025',
    author: 'Benard',
    image: '/images/resource/kenyan-mobile-sme.png',
    tags: ['Web Design', 'Growth', 'Mobile'],
    excerpt: 'Most users across Africa and emerging markets access the web primarily via phone. Here is what that means for business.',
    content: [
      'Over 85% of internet users in emerging markets access the web via a mobile phone. If your website is not designed mobile-first, you are handing potential customers a broken experience the moment they land on your page.',
      'Mobile-first means designing for thumb navigation, fast load times on variable connections, large tap targets, and efficient content delivery. It also means testing on real devices used by your audience — not just browser resize tools.',
      'At BenaWeb, every site we build starts from the mobile view and works outward. The result is a site that feels native on the device your customers actually use — whether they are in Nairobi, Lagos, or London.',
    ],
    comments: [
      { author: 'James Mwangi', text: 'This is exactly the issue we had with our old site. Switching to mobile-first made a huge difference in how long visitors stayed on the page.' },
      { author: 'Amina Hassan', text: 'Great read. The point about 3G load times is something a lot of developers overlook. Thank you Benard.' },
    ],
  },
  {
    slug: 'mpesa-integration-daraja-api',
    title: 'M-Pesa integration — what developers in Kenya need to know',
    date: '18 Mar, 2025',
    author: 'Benard',
    image: '/images/resource/news-2.jpg',
    tags: ['M-Pesa', 'Daraja API', 'Kenya'],
    excerpt: 'A practical overview of the Daraja API and how to connect it to your web project.',
    content: [
      'M-Pesa is not optional for Kenyan e-commerce — it is the payment method your customers expect. Integrating it into a web project means working with Safaricom\'s Daraja API, which has a few quirks worth knowing before you start.',
      'The most common integration is the STK Push (Lipa na M-Pesa Online), which prompts the customer to complete payment directly on their phone. The API requires a business shortcode, a passkey, and a callback URL that Safaricom can reach from the internet.',
      'Key gotchas: your callback URL must be publicly accessible during development (use ngrok), the API uses UTC time but most Kenyan businesses operate on EAT, and sandbox testing requires a specific test phone number. We have built this integration multiple times and can walk you through the full flow.',
    ],
    comments: [],
  },
  {
    slug: 'react-vs-html-kenyan-businesses',
    title: 'React vs plain HTML — which is right for your business site?',
    date: '02 Apr, 2025',
    author: 'Benard',
    image: '/images/resource/news-3.jpg',
    tags: ['React', 'Web Design', 'Kenya'],
    excerpt: 'When a framework is overkill and when it is exactly what you need. A guide for non-technical business owners.',
    content: [
      'One of the most common questions we get from Kenyan business owners is whether they need React for their website. The honest answer is: it depends on what you need the site to do.',
      'For a standard business website — 5 to 10 pages, contact form, maybe a blog — plain HTML with good CSS is faster to build, cheaper to maintain, and loads faster for end users. There is no need to add framework overhead when the site is essentially static content.',
      'React becomes the right choice when your site needs to behave like an application — user accounts, real-time data, dynamic filtering, dashboards, multi-step forms, or anything that changes based on who is logged in. If your business needs a booking system, a client portal, or a product catalogue with live inventory, React plus Firebase is the right foundation.',
    ],
    comments: [],
  },
];

export default posts;
