"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ChevronLeft,
  ChevronRight,
  Factory,
  Globe2,
  Leaf,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Recycle,
  ShieldCheck,
  Sparkles,
  Target,
  Truck,
  X,
  Zap
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { categories, products, type Product } from "./product-data";

const heroImage =
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1800&q=85";

const factoryImage =
  "https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=1200&q=85";

const warehouseImage =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85";

const stats = [
  { label: "Years Experience", value: 41, suffix: "+", icon: Factory },
  { label: "Export Markets", value: 5, suffix: "+", icon: Globe2 },
  { label: "Virgin Materials", value: 100, suffix: "%", icon: BadgeCheck },
  { label: "Catalogue Products", value: products.length, suffix: "", icon: Boxes }
];

const leadership = [
  {
    name: "Abdullah Ahmed Al Ismail",
    title: "Founder & CEO",
    image: "/catalog/p08-01-X12.jpg",
    quote: "Built on trust, strengthened by quality, and driven by long-term customer partnerships."
  },
  {
    name: "Abdul Aziz Ahmed Al Ismail",
    title: "General Manager",
    image: "/catalog/p08-02-X13.jpg",
    quote: "Every order deserves dependable engineering, disciplined delivery, and measurable value."
  },
  {
    name: "Raju George",
    title: "Commercial Manager",
    image: "/catalog/p08-03-X14.jpg",
    quote: "We connect industrial buyers with practical packaging solutions that move business forward."
  }
];

const chooseUs = [
  ["41+ Years Experience", "Four decades of applied PE film and industrial packaging knowledge.", ShieldCheck],
  ["High-Quality Raw Materials", "SABIC virgin materials and disciplined input selection.", BadgeCheck],
  ["Customized Manufacturing", "Sizes, gauges, colors, printing, and formats aligned to buyer needs.", Sparkles],
  ["Global Export Capability", "Serving Saudi Arabia, Gulf Countries, India, China, and Turkey.", Globe2],
  ["Timely Delivery", "Reliable planning for procurement, manufacturing, and shipment cycles.", Truck],
  ["Industry Expertise", "Deep familiarity with LDPE, LLDPE, HDPE, PP, PVC, and specialty films.", Factory],
  ["Competitive Pricing", "Commercially practical solutions without compromising production quality.", PackageCheck],
  ["Sustainability Commitment", "Durable products, eco-conscious options, and responsible production thinking.", Recycle]
];

const process = [
  "Raw Material Selection",
  "Extrusion & Conversion",
  "Printing & Finishing",
  "Quality Inspection",
  "Packing & Dispatch"
];

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const spring = useSpring(0, { stiffness: 70, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  light = false
}: {
  eyebrow: string;
  title: string;
  copy: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className={`font-display text-sm font-semibold uppercase tracking-[0.28em] ${light ? "text-industrial-silver" : "text-industrial-red"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-industrial-charcoal"}`}>
        {title}
      </h2>
      <p className={`mt-5 text-base leading-8 sm:text-lg ${light ? "text-white/70" : "text-neutral-600"}`}>{copy}</p>
    </motion.div>
  );
}

function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {product ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 py-8 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
            className="grid max-h-[90vh] w-full max-w-6xl overflow-y-auto bg-white shadow-premium lg:grid-cols-[.95fr_1.05fr]"
          >
            <div className="bg-neutral-100 p-4 sm:p-6">
              <div
                aria-label={product.name}
                role="img"
                className="min-h-[340px] bg-white bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {product.gallery.slice(0, 6).map((image) => (
                  <div
                    key={image}
                    aria-label={`${product.name} catalogue view`}
                    role="img"
                    className="aspect-[4/3] border border-neutral-200 bg-white bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{product.sourcePage}</p>
            </div>
            <div className="p-6 sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-industrial-red">{product.category}</p>
                  <h3 className="mt-3 font-display text-3xl font-bold text-industrial-charcoal">{product.name}</h3>
                </div>
                <button
                  aria-label="Close product details"
                  className="grid h-10 w-10 flex-none place-items-center border border-neutral-200 text-industrial-charcoal transition hover:border-industrial-red hover:text-industrial-red"
                  onClick={onClose}
                >
                  <X size={19} />
                </button>
              </div>
              <p className="mt-6 text-lg leading-8 text-neutral-700">{product.description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {product.features.map((feature) => (
                  <div key={feature} className="border border-neutral-200 bg-neutral-50 p-4">
                    <BadgeCheck className="mb-4 text-industrial-red" size={22} />
                    <p className="font-semibold text-industrial-charcoal">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-4">
                <div className="border-l-4 border-industrial-red bg-neutral-50 p-5">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Material Information</p>
                  <p className="mt-2 leading-7 text-neutral-700">{product.material}</p>
                </div>
                <div className="border-l-4 border-industrial-orange bg-neutral-50 p-5">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Applications</p>
                  <p className="mt-2 leading-7 text-neutral-700">{product.application}</p>
                </div>
                <div className="border-l-4 border-industrial-steel bg-neutral-50 p-5">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Customization Options</p>
                  <p className="mt-2 leading-7 text-neutral-700">{product.customization}</p>
                </div>
              </div>
              <div className="mt-8 overflow-hidden border border-neutral-200">
                <div className="bg-industrial-charcoal px-5 py-4">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">Technical Specifications</p>
                </div>
                <div className="divide-y divide-neutral-200">
                  {product.specs.map((spec) => (
                    <div key={`${product.name}-${spec.label}`} className="grid gap-2 px-5 py-4 sm:grid-cols-[180px_1fr]">
                      <p className="font-semibold text-industrial-charcoal">{spec.label}</p>
                      <p className="leading-7 text-neutral-700">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="mt-8 inline-flex items-center gap-3 bg-industrial-red px-6 py-4 font-semibold text-white transition hover:bg-[#7f1616]"
              >
                Request specification <ArrowRight size={18} />
              </a>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.84], [1, 0]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const moveCarousel = (direction: number) => {
    carouselRef.current?.scrollBy({ left: direction * 370, behavior: "smooth" });
  };

  return (
    <main className="overflow-hidden bg-white">
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-industrial-charcoal/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-white">
            <span
              aria-label="Al Ismail Plastic Factory logo"
              role="img"
              className="block h-12 w-12 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/brand/al-ismail-logo.png)" }}
            />
            <span className="hidden font-display text-sm font-semibold uppercase tracking-[0.22em] sm:block">Al Ismail Plastic Factory</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-white/75 lg:flex">
            {["About", "Products", "Manufacturing", "Sustainability", "Global", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-industrial-red hover:bg-industrial-red"
          >
            Inquiry <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <section id="home" ref={heroRef} className="relative min-h-screen bg-industrial-charcoal text-white">
        <motion.div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})`, y, opacity }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,17,20,.96),rgba(16,17,20,.72),rgba(155,28,28,.28))]" />
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#fff,transparent)]"
          style={{ opacity: useTransform(scrollYProgress, [0.5, 1], [0, 1]) }}
        />
        <div className="noise absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-industrial-silver"
            >
              Dammam, Eastern Province, Saudi Arabia
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.03] sm:text-6xl lg:text-7xl"
            >
              Engineering High-Performance Plastic Solutions Since 1983
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-7 max-w-3xl text-lg leading-8 text-white/76 sm:text-xl"
            >
              Trusted manufacturer, exporter, and supplier of premium plastic packaging and industrial solutions across Saudi Arabia, Gulf Countries, India, China, and Turkey.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a href="#products" className="inline-flex items-center gap-3 bg-industrial-red px-6 py-4 font-semibold text-white shadow-redglow transition hover:bg-[#7d1515]">
                Explore Products <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 font-semibold text-white transition hover:border-white hover:bg-white hover:text-industrial-charcoal">
                Contact Us <Phone size={18} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 42 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden min-h-[560px] lg:block"
          >
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 1.5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="industrial-mask absolute right-0 top-6 h-[420px] w-[370px] overflow-hidden border border-white/16 bg-cover bg-center shadow-premium"
              style={{ backgroundImage: `url(${warehouseImage})` }}
            />
            <motion.div
              animate={{ y: [0, 18, 0], rotate: [0, -1.2, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-16 left-4 w-80 bg-white p-5 text-industrial-charcoal shadow-premium"
            >
              <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-industrial-red">Production Intelligence</p>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="border border-neutral-200 p-4">
                    <stat.icon className="text-industrial-red" size={22} />
                    <p className="mt-3 font-display text-2xl font-bold">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="absolute right-10 top-[460px] flex items-center gap-3 dark-glass px-5 py-4">
              <Globe2 className="text-industrial-orange" size={22} />
              <span className="text-sm font-semibold">Global export network</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.75 }}
            className="relative min-h-[560px]"
          >
            <div className="absolute inset-x-0 top-0 h-[430px] bg-cover bg-center shadow-premium" style={{ backgroundImage: `url(${factoryImage})` }} />
            <div className="absolute bottom-0 left-5 right-0 bg-industrial-charcoal p-7 text-white shadow-premium sm:left-12">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-industrial-silver">Founded 1983</p>
              <p className="mt-4 text-3xl font-bold">41+ years of PE film industry experience</p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/72">
                <span>Customer-focused manufacturing</span>
                <span>Reliable supply chain</span>
                <span>High-quality standards</span>
                <span>Timely delivery commitment</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.75 }}
            className="flex flex-col justify-center"
          >
            <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-industrial-red">About Company</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-industrial-charcoal sm:text-5xl">
              Manufacturing excellence with a global industrial mindset.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Al Ismail Plastic Factory is recognized for customized solutions, high-quality raw materials, a diverse plastic product range, industrial-grade packaging solutions, and long-standing customer trust.
            </p>
            <div className="mt-10 space-y-6">
              {["Founded in Dammam with deep regional manufacturing roots", "Exporter, importer, and supplier serving demanding industrial buyers", "Product engineering across LDPE, LLDPE, HDPE, PP, and PVC categories", "Quality-driven production built around dependable delivery"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="flex gap-5 border-l border-neutral-200 pl-6"
                >
                  <span className="font-display text-lg font-bold text-industrial-red">0{index + 1}</span>
                  <p className="text-neutral-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-neutral-50 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Vision & Mission"
            title="Purpose-built to lead through innovation, quality, and sustainability."
            copy="The company combines disciplined manufacturing with practical commercial thinking, helping customers source dependable plastic solutions for varied industrial requirements."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Vision",
                icon: Target,
                text: "To become a global leader in the plastic industry through innovation, sustainability, and manufacturing excellence."
              },
              {
                title: "Mission",
                icon: Zap,
                text: "Deliver unparalleled quality, efficiency, and customer satisfaction through advanced technologies and reliable plastic manufacturing solutions."
              }
            ].map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.55 }}
                className="group relative overflow-hidden bg-white p-8 shadow-sm ring-1 ring-neutral-200 sm:p-10"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-industrial-red via-industrial-orange to-industrial-silver" />
                <item.icon className="text-industrial-red transition group-hover:scale-110" size={34} />
                <h3 className="mt-8 font-display text-3xl font-bold text-industrial-charcoal">{item.title}</h3>
                <p className="mt-5 text-lg leading-8 text-neutral-650">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="relative bg-white py-24 sm:py-28">
        <div className="absolute left-0 top-0 h-32 w-full bg-[linear-gradient(180deg,#f5f5f5,transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Product Showcase"
            title="Premium industrial packaging solutions engineered for real production demands."
            copy="Explore high-performance plastic films, bags, safety products, food packaging, and industrial containers manufactured for consistency, durability, and commercial reliability."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-industrial-red text-white shadow-redglow"
                    : "border border-neutral-200 bg-white text-neutral-700 hover:border-industrial-red hover:text-industrial-red"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-10 flex justify-end gap-3">
            <button aria-label="Previous products" onClick={() => moveCarousel(-1)} className="grid h-12 w-12 place-items-center border border-neutral-200 transition hover:border-industrial-red hover:text-industrial-red">
              <ChevronLeft size={20} />
            </button>
            <button aria-label="Next products" onClick={() => moveCarousel(1)} className="grid h-12 w-12 place-items-center border border-neutral-200 transition hover:border-industrial-red hover:text-industrial-red">
              <ChevronRight size={20} />
            </button>
          </div>
          <motion.div layout ref={carouselRef} className="scrollbar-hide mt-5 flex snap-x gap-6 overflow-x-auto pb-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.article
                  layout
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  whileHover={{ y: -10, rotateX: 1.5, rotateY: -1.5 }}
                  transition={{ duration: 0.35 }}
                  className="group relative min-h-[520px] w-[310px] flex-none snap-start overflow-hidden bg-industrial-charcoal shadow-premium sm:w-[360px]"
                >
                  <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${product.image})` }} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.05),rgba(16,17,20,.94))]" />
                  <div className="relative flex h-full flex-col justify-end p-6 text-white">
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-industrial-silver">{product.category}</p>
                    <h3 className="mt-3 font-display text-2xl font-bold">{product.name}</h3>
                    <p className="mt-4 min-h-[84px] text-sm leading-7 text-white/76">{product.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.features.slice(0, 2).map((feature) => (
                        <span key={feature} className="border border-white/18 bg-white/10 px-3 py-2 text-xs font-semibold text-white/86">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="mt-6 inline-flex w-fit items-center gap-3 bg-white px-5 py-3 font-semibold text-industrial-charcoal transition hover:bg-industrial-red hover:text-white"
                    >
                      View details <ArrowRight size={17} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section id="manufacturing" className="relative overflow-hidden bg-industrial-graphite py-24 text-white sm:py-28">
        <div className="absolute inset-0 bg-steel-grid bg-[length:72px_72px] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(155,28,28,.28),transparent_34%),linear-gradient(135deg,rgba(255,255,255,.04),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            light
            eyebrow="Manufacturing Excellence"
            title="Advanced production discipline for high-volume industrial output."
            copy="A dark-floor manufacturing mindset powers every stage: material selection, extrusion, conversion, inspection, packing, and reliable dispatch."
          />
          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_.9fr]">
            <div className="group relative min-h-[430px] overflow-hidden border border-white/12 bg-industrial-charcoal shadow-premium">
              <video
                className="absolute inset-0 h-full w-full object-cover opacity-[.82] transition duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/catalog/p05-02-X6.jpg"
                aria-label="Manufacturing machinery playback"
              >
                <source src="/brand/manufacturing-loop.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,17,20,.82),rgba(16,17,20,.24),rgba(155,28,28,.34))]" />
              <div className="absolute inset-0 bg-steel-grid bg-[length:54px_54px] opacity-[.18]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="dark-glass max-w-sm p-5">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-industrial-silver">Live Process View</p>
                  <h3 className="mt-3 font-display text-2xl font-bold">Precision manufacturing in motion</h3>
                  <p className="mt-3 text-sm leading-6 text-white/68">A compact loop for extrusion, conversion, inspection, and dispatch workflows.</p>
                </div>
              </div>
            </div>
            <div className="grid content-center gap-5">
              {process.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="dark-glass flex items-center gap-5 p-5"
                >
                  <span className="grid h-12 w-12 flex-none place-items-center bg-industrial-red font-display font-bold">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{step}</h3>
                    <p className="mt-1 text-sm text-white/62">Controlled workflow aligned to repeatable product quality.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="dark-glass p-6 text-center">
                <stat.icon className="mx-auto text-industrial-orange" size={30} />
                <p className="mt-4 font-display text-4xl font-bold">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/56">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sustainability" className="relative bg-[#f4f7f3] py-24 sm:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(37,112,82,.16),transparent_34%),linear-gradient(300deg,rgba(155,28,28,.08),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-[#23704f]">Sustainability</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-industrial-charcoal sm:text-5xl">
              Eco-industrial thinking for durable, responsible packaging.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-650">
              Al Ismail Plastic Factory supports eco-friendly manufacturing practices, biodegradable product options, long-term durability, and environmental responsibility across its production approach.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {["Eco-friendly manufacturing", "Biodegradable product options", "Sustainable production", "Long-term durability"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white p-4 shadow-sm">
                  <Leaf className="text-[#23704f]" size={22} />
                  <span className="font-semibold text-industrial-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.75 }}
            className="relative min-h-[520px] overflow-hidden bg-industrial-charcoal text-white shadow-premium"
          >
            <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85)" }} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,17,20,.2),rgba(16,17,20,.92))]" />
            <div className="relative flex h-full min-h-[520px] flex-col justify-end p-8 sm:p-10">
              <Recycle className="text-[#7ed2a2]" size={52} />
              <h3 className="mt-6 font-display text-3xl font-bold">Responsible production is a long-term business advantage.</h3>
              <p className="mt-5 max-w-xl leading-8 text-white/72">
                Durable products, smarter raw material choices, and customer-specific options help reduce waste and improve lifecycle value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="leadership" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Leadership"
            title="Experienced leadership with a customer-first manufacturing culture."
            copy="The team brings founder-led continuity, commercial discipline, and operational focus to every industrial partnership."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {leadership.map((leader) => (
              <motion.article
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden border border-neutral-200 bg-white"
              >
                <div className="relative h-72 overflow-hidden bg-[linear-gradient(135deg,#1B1B1B,#34373d_48%,#9B1C1C)]">
                  <div
                    aria-label={`${leader.name} portrait`}
                    role="img"
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${leader.image})` }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(27,27,27,.32))]" />
                </div>
                <div className="p-6">
                  <p className="font-display text-xl font-bold text-industrial-charcoal">{leader.name}</p>
                  <p className="mt-2 font-semibold text-industrial-red">{leader.title}</p>
                  <p className="mt-5 leading-7 text-neutral-600">“{leader.quote}”</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="global" className="relative overflow-hidden bg-industrial-charcoal py-24 text-white sm:py-28">
        <div className="absolute inset-0 bg-steel-grid bg-[length:80px_80px] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            light
            eyebrow="Global Presence"
            title="Export-ready capability for regional and international buyers."
            copy="A Dammam headquarters gives Al Ismail Plastic Factory strong access to Gulf logistics corridors and wider markets across Asia and beyond."
          />
          <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative min-h-[460px] overflow-hidden border border-white/12 bg-[#111827] p-6">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${warehouseImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(16,17,20,.95),rgba(16,17,20,.45))]" />
              {[
                ["Saudi Arabia", "62%", "55%"],
                ["Gulf Countries", "58%", "47%"],
                ["India", "72%", "58%"],
                ["China", "83%", "45%"],
                ["Turkey", "50%", "36%"]
              ].map(([place, left, top], index) => (
                <motion.div
                  key={place}
                  className="absolute"
                  style={{ left, top }}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.16, duration: 0.5 }}
                >
                  <span className="absolute -inset-2 animate-ping rounded-full bg-industrial-red/40" />
                  <span className="relative block h-4 w-4 rounded-full bg-industrial-red ring-4 ring-white/20" />
                  <span className="absolute left-5 top-1 whitespace-nowrap bg-white px-3 py-2 text-xs font-bold text-industrial-charcoal shadow-lg">{place}</span>
                </motion.div>
              ))}
              <div className="relative mt-6 inline-flex items-center gap-3 bg-white/10 px-5 py-4 backdrop-blur">
                <Globe2 className="text-industrial-orange" />
                <span className="font-semibold">Saudi Arabia, Gulf Countries, India, China, Turkey</span>
              </div>
            </div>
            <div className="grid content-center gap-5">
              {["Export documentation support", "Containerized shipment planning", "Industrial-grade packing standards", "Buyer-specific product specifications"].map((item) => (
                <div key={item} className="dark-glass flex items-center gap-4 p-5">
                  <Truck className="text-industrial-orange" size={26} />
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Why Choose Us"
            title="A reliable industrial partner for quality, customization, and scale."
            copy="Customers choose Al Ismail Plastic Factory for dependable raw materials, practical engineering, competitive commercial structures, and consistent delivery."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {chooseUs.map(([title, copy, Icon]) => (
              <motion.article
                key={title as string}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -6 }}
                className="bg-white p-6 shadow-sm ring-1 ring-neutral-200"
              >
                <Icon className="text-industrial-red" size={28} />
                <h3 className="mt-6 font-display text-xl font-bold text-industrial-charcoal">{title as string}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{copy as string}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-industrial-graphite py-24 text-white sm:py-28">
        <div className="absolute inset-0 bg-cover bg-center opacity-28" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,17,20,.98),rgba(16,17,20,.82),rgba(155,28,28,.28))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:px-8">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-industrial-silver">Contact</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">Start an industrial packaging inquiry.</h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Share your product requirements, target quantity, specifications, and destination. The team can support export inquiries, business partnerships, and custom production discussions.
            </p>
            <div className="mt-10 grid gap-4">
              {[
                [MapPin, "Headquarters", "Dammam, Eastern Province, Saudi Arabia"],
                [Mail, "Email", "info@alismailfactory.com"],
                [Phone, "Phone / WhatsApp", "+966 13 000 0000"]
              ].map(([Icon, title, detail]) => (
                <div key={title as string} className="dark-glass flex gap-4 p-5">
                  <Icon className="text-industrial-orange" size={25} />
                  <div>
                    <p className="font-semibold">{title as string}</p>
                    <p className="mt-1 text-white/64">{detail as string}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <form className="bg-white p-6 text-industrial-charcoal shadow-premium sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  Name
                  <input className="border border-neutral-200 px-4 py-3 outline-none transition focus:border-industrial-red" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Company
                  <input className="border border-neutral-200 px-4 py-3 outline-none transition focus:border-industrial-red" placeholder="Company name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Email
                  <input type="email" className="border border-neutral-200 px-4 py-3 outline-none transition focus:border-industrial-red" placeholder="name@company.com" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Product Interest
                  <select className="border border-neutral-200 px-4 py-3 outline-none transition focus:border-industrial-red" defaultValue="">
                    <option value="" disabled>
                      Select product category
                    </option>
                    {categories.filter((category) => category !== "All").map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="mt-5 grid gap-2 text-sm font-semibold">
                Requirements
                <textarea className="min-h-36 resize-y border border-neutral-200 px-4 py-3 outline-none transition focus:border-industrial-red" placeholder="Tell us about quantity, dimensions, material, printing, and destination." />
              </label>
              <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-industrial-red px-6 py-4 font-semibold text-white transition hover:bg-[#7f1616] sm:w-auto">
                Submit Inquiry <ArrowRight size={18} />
              </button>
            </form>
            <iframe
              title="Dammam map"
              className="h-72 w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Dammam%2C%20Eastern%20Province%2C%20Saudi%20Arabia&output=embed"
            />
          </div>
        </div>
      </section>

      <footer className="bg-[#0b0c0f] px-4 py-8 text-center text-sm text-white/52 sm:px-6">
        <p>© 2026 Al Ismail Plastic Factory. Premium plastic manufacturing and industrial packaging solutions since 1983.</p>
      </footer>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </main>
  );
}
