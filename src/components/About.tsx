'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <motion.div
          className="about__data"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="section__subtitle">À Propos</span>
          <h2 className="section__title about__title">
            <div>
              Nous proposons
              <img src="/assets/img/about-sushi-title.png" alt="" />
            </div>
            Une Cuisine Saine
          </h2>

          <p className="about__description">
            La nourriture nous vient de nos proches, qu&apos;ils aient des ailes
            ou des racines. C&apos;est ainsi que nous considérons la nourriture,
            elle a aussi une culture. Elle a une histoire qui se transmet de
            génération en génération.
          </p>
        </motion.div>

        <motion.img
          src="/assets/img/about-sushi.png"
          alt="image à propos"
          className="about__img"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>

      <img src="/assets/img/leaf-branch-1.png" alt="" className="about__leaf" />
    </section>
  )
}
