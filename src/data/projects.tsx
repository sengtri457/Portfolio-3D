import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "codingducks",
    category: "Coding platform",
    title: "Hosipital",
    src: "/assets/projects-screenshots/codingducks/hospital.webp",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://github.com/sengtri457/hospital",
    github: "https://github.com/sengtri457/hospital",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Hospital = Html + CSS Battles
          </TypographyP>
          <TypographyP className="font-mono ">
            Hospital is your coding dojo — where you level up your skills,
            battle in real-time code duels, and earn badges like a true code
            warrior. Track your progress, flex your brain, and climb the
            leaderboard. Ready to quack the code?
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/codingducks/hospital.webp`]} />
        </div>
      );
    },
  },
  {
    id: "couponluxury",
    category: "Resteruant",
    title: "codingducks Website",
    src: "/assets/projects-screenshots/codingducks/food.webp",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://github.com/sengtri457/BreadShop",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.vue,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            CouponLuxury is your go-to destination for snagging the best deals
            without lifting a finger. Whether you&apos;re hunting for the latest
            discounts or trying to save a buck at your favorite stores,
            CouponLuxury&apos;s got you covered.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/codingducks/food.webp`]} />
        </div>
      );
    },
  },
  {
    id: "the-booking-desk",
    category: "Coffee Shop",
    title: "The Coffee Shop",
    src: "/assets/projects-screenshots/codingducks/coffee-.webp",
    screenshots: ["1.png"],
    live: "https://github.com/sengtri457/CoffeeKtri.github.io",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.sanity],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            The Booking Desk is your ultimate travel consultation hub, designed
            to turn your wanderlust dreams into reality. With a focus on smooth
            and visually captivating animations, navigating the site feels like
            a breeze—it&apos;s almost as if the destinations are calling you.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/codingducks/coffee-.webp`]} />
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Bakery",
    title: "My Baker",
    src: "/assets/projects-screenshots/codingducks/bakery.webp",
    screenshots: ["1.png"],
    live: "https://github.com/sengtri457/BreadShop",
    github: "https://github.com/sengtri457/BreadShop",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <SlideShow images={[`${BASE_PATH}/codingducks/bakery.webp`]} />
        </div>
      );
    },
  },
  {
    id: "ghostchat",
    category: "Car Wash",
    title: "Cars",
    src: "/assets/projects-screenshots/codingducks/car.webp",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://github.com/sengtri457/CarShop",
    github: "https://github.com/sengtri457/CarShop",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
      backend: [PROJECT_SKILLS.supabase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Ghostchat is your go-to spot for sending anonymous messages without
            leaving a trace. Powered by Supabase, it&apos;s all about keeping
            things low-key and secure. Whether you&apos;re sharing secrets,
            giving feedback, or just having some fun, Ghostchat ensures your
            identity stays hidden, while your voice is heard. Say what you want,
            without the worry.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/codingducks/car.webp`]} />
        </div>
      );
    },
  },
  {
    id: "jra",
    category: "Pure Water",
    title: "Water Life",
    src: "/assets/projects-screenshots/codingducks/drinking.webp",
    screenshots: ["1.png"],
    live: "https://github.com/sengtri457/WaterShop",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            JNTUA Results Analyzer was a revolutionary tool designed to simplify
            and enhance the experience of accessing academic results. It served
            as a powerful proxy between the JNTUA university results website and
            its users, offering a range of features that made result analysis
            faster and more efficient. Here&apos;s what made it stand out:
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/codingducks/drinking.webp`]} />
        </div>
      );
    },
  },
  {
    id: "ai",
    category: "Artificul Interlegence",
    title: "AI assist",
    src: "/assets/projects-screenshots/codingducks/ai.webp",
    screenshots: ["1.png"],
    live: "https://github.com/sengtri457/AI",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            JNTUA Results Analyzer was a revolutionary tool designed to simplify
            and enhance the experience of accessing academic results. It served
            as a powerful proxy between the JNTUA university results website and
            its users, offering a range of features that made result analysis
            faster and more efficient. Here&apos;s what made it stand out:
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/codingducks/ai.webp`]} />
        </div>
      );
    },
  },
  {
    id: "Consultan",
    category: "Consultansy",
    title: "Consultan",
    src: "/assets/projects-screenshots/codingducks/consultancy.webp",
    screenshots: ["1.png"],
    live: "https://github.com/sengtri457/bussnieus.github.io",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            JNTUA Results Analyzer was a revolutionary tool designed to simplify
            and enhance the experience of accessing academic results. It served
            as a powerful proxy between the JNTUA university results website and
            its users, offering a range of features that made result analysis
            faster and more efficient. Here&apos;s what made it stand out:
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/codingducks/consultancy.webp`]} />
        </div>
      );
    },
  },
  {
    id: "Ecormmerce",
    category: "Ecormmerce",
    title: "Phsar Materk",
    src: "/assets/projects-screenshots/codingducks/Ecomerce.png",
    screenshots: ["1.png"],
    live: "https://ecommerce-js-ktri.vercel.app/",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Discover the latest trends in fashion at [Your Store Name]. From
            casual wear to formal styles, our collection offers affordable,
            high-quality clothing and accessories for every occasion. Shop with
            confidence, express your style, and enjoy fast delivery right to
            your door.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/codingducks/Ecomerce.png`]} />
          <TypographyH3 className="my-4 mt-8">
            Seamless Shopping Experience
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Browse, select, and purchase your favorite products with just a
              few clicks — no clutter, no confusion. Optimized for mobile,
              tablet, and desktop for smooth browsing on any device.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">
            Smart Product Filtering::
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Instantly narrow down your search by size, color, price, or
              category — no more scrolling through endless pages. Personalized
              suggestions tailored to your shopping behavior.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">
            Seller & Admin Tools:
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Vendors can easily manage inventory, update listings, and track
              orders in real-time through a user-friendly dashboard. Export
              product reports and sales summaries in Excel for fast accounting
              and analytics.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "Education",
    category: "Education",
    title: "Code Master",
    src: "/assets/projects-screenshots/codingducks/CodeMaster.png",
    screenshots: ["1.png"],
    live: "https://web-team-ktri.vercel.app/",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            We are the best at fulfilling your potential and achieving your
            goals.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/codingducks/CodeMaster.png`]} />
          <TypographyH3 className="my-4 mt-8">
            Effortless Learning Access
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Instantly access courses, assignments, and learning materials from
              one centralized dashboard — no more searching through scattered
              links or documents. Mobile-friendly and optimized for learning on
              the go.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">
            Course & Content Organization:
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Browse subjects, lectures, and resources by semester, topic, or
              instructor. Save your progress and easily pick up where you left
              off.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Faculty Tools:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Teachers can upload materials, manage assignments, and evaluate
              students from an intuitive panel. Export gradebooks and student
              performance in Excel format for quick administrative work.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">
            Advanced Learning Insights:
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Each result came with additional features including:
              <ul className="list-disc font-mono ml-6">
                <li>
                  <strong>Progress Tracking:</strong>
                  See completion rates and time spent per module.
                </li>
                <li>
                  <strong>Grade Analytics:</strong> Visualize performance trends
                  across subjects.
                </li>
                <li>
                  <strong>Goal Projections:</strong> Get AI-powered insights on
                  future academic outcomes.
                </li>
                <li>
                  <strong> Skill Mapping: </strong>Identify strengths and areas
                  for improvement instantly.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "Knowlauge",
    category: "Knowlauge",
    title: "Aupp Uni Clone",
    src: "/assets/projects-screenshots/codingducks/aupp.png",
    screenshots: ["1.png"],
    live: "https://aupp-clone.vercel.app/",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            AUPP’s new modern facility has been designed to enhance and support
            a model academic teaching and learning environment, incorporating
            the newest technologies, a learning center, a library, and student
            services that will complement academic offerings.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/codingducks/aupp.png`]} />
          <TypographyH3 className="my-4 mt-8">
            Effortless Learning Access
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Instantly access courses, assignments, and learning materials from
              one centralized dashboard — no more searching through scattered
              links or documents. Mobile-friendly and optimized for learning on
              the go.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">
            Course & Content Organization:
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Browse subjects, lectures, and resources by semester, topic, or
              instructor. Save your progress and easily pick up where you left
              off.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Faculty Tools:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Teachers can upload materials, manage assignments, and evaluate
              students from an intuitive panel. Export gradebooks and student
              performance in Excel format for quick administrative work.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">
            Advanced Learning Insights:
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Each result came with additional features including:
              <ul className="list-disc font-mono ml-6">
                <li>
                  <strong>Progress Tracking:</strong>
                  See completion rates and time spent per module.
                </li>
                <li>
                  <strong>Grade Analytics:</strong> Visualize performance trends
                  across subjects.
                </li>
                <li>
                  <strong>Goal Projections:</strong> Get AI-powered insights on
                  future academic outcomes.
                </li>
                <li>
                  <strong> Skill Mapping: </strong>Identify strengths and areas
                  for improvement instantly.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
