const config = {
  title: "Bun sengtri | Frontend Developer",
  description: {
    long: "Explore the portfolio of Naresh, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Naresh, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Naresh",
    "portfolio",
    "Frontend developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Bun Sengtri",
  email: "sengtri123@gmail.com.com",
  site: "https://nareshkhatri.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/me/",
    instagram: "https://www.instagram.com/extra_s4ngtr1/",
    facebook: "https://web.facebook.com/sxng.tri457",
    github: "https://github.com/sengtri457",
  },
};
export { config };
