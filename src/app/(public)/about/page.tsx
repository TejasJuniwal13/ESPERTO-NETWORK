

"use client";

import { motion, Variants } from "framer-motion";

/* ---------------- VARIANTS ---------------- */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 60
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const floatingGlow: Variants = {
  animate: {
    y: [0, -30, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

/* ---------------- COMPONENT ---------------- */

const About = () => {
  return (
    <div className="bg-[#050816] text-slate-100 overflow-x-hidden">

      {/* HERO SECTION */}

      <section className="relative mx-auto max-w-6xl px-4 py-28 md:px-6">

        {/* floating glow */}
        <motion.div
          variants={floatingGlow}
          animate="animate"
          className="absolute top-0 left-1/2 -translate-x-1/2
          w-[500px] h-[200px] bg-[#06B6D4]/20 blur-[120px] rounded-full"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-14 md:grid-cols-2 items-center"
        >

          {/* TEXT */}

          <div className="space-y-6">

            <motion.p
              variants={item}
              className="text-xs uppercase tracking-[0.35em] text-[#06B6D4]"
            >
              About Esperto Networks
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-semibold leading-tight"
            >
              Engineering IT Infrastructure
              <span className="block bg-gradient-to-r from-[#FACC15] via-[#06B6D4] to-white bg-clip-text text-transparent">
                across India.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-slate-300 leading-relaxed"
            >
              Esperto Networks is a professional IT service and support
              provider with over <b>13 years of industry expertise</b>.
              Through a nationwide network of certified engineers,
              we deliver enterprise-grade infrastructure solutions
              for organizations across India.
            </motion.p>

          </div>



          {/* IMAGE */}
{/* 
          <motion.div
            variants={item}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >

            <div className="absolute inset-0 -z-10 bg-[#06B6D4]/20 blur-3xl rounded-3xl" />

            <div className="overflow-hidden rounded-3xl border border-[#06B6D4]/20 shadow-[0_10px_40px_rgba(0,0,0,0.7)]">

              <motion.img
                src="/about.png"
                alt="Esperto Networks"
                className="w-full h-full object-cover brightness-110 contrast-125"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
              />

            </div>

          </motion.div> */}
          {/* image ends here  */}



        </motion.div>

      </section>


      {/* STORY SECTION */}

      <section className="relative py-40 bg-gradient-to-b from-[#0A1A2F] via-[#0F4C5C] to-transparent">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-6"
        >

          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold
            bg-gradient-to-r from-[#39FF14] via-white to-[#06B6D4]
            bg-clip-text text-transparent"
          >
            Built on Vision
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-8 text-slate-300 leading-relaxed"
          >
            Esperto Networks was founded with a simple but powerful vision —
            to make enterprise-grade IT support accessible and affordable
            for every business.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 text-slate-300 leading-relaxed"
          >
            Over time we built a robust infrastructure network capable of
            supporting everything from small offices to complex data center
            deployments.
          </motion.p>

        </motion.div>

      </section>


      {/* EXPERTISE SECTION */}

      <section className="py-40">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16"
        >

          <motion.div variants={item} whileHover={{ y: -8 }}>
            <h3 className="text-3xl font-bold mb-4">
              Human Expertise
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Our engineers continuously train in virtualization,
              cloud infrastructure, IP surveillance and
              unified communication systems.
            </p>
          </motion.div>

          <motion.div variants={item} whileHover={{ y: -8 }}>
            <h3 className="text-3xl font-bold mb-4">
              Nationwide Presence
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Engineers stationed across Tier 1, 2 and 3 cities
              enable rapid deployment and reliable support
              across India.
            </p>
          </motion.div>

        </motion.div>

      </section>


      {/* CTA */}

      <section className="bg-[#0A1A2F] py-20">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between"
        >

          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-semibold mb-8 md:mb-0"
          >
            What can we help you achieve?
          </motion.h2>

          <motion.div
            variants={item}
            className="flex flex-col gap-4"
          >

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#06B6D4] text-[#0A1A2F] font-semibold hover:bg-[#08c3e5]"
            >
              Work With Us
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/freelancer"
              className="px-8 py-4 rounded-full border border-slate-300 hover:border-white"
            >
              Apply for Job
            </motion.a>

          </motion.div>

        </motion.div>

      </section>

    </div>
  );
};

export default About;