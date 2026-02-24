'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <motion.img
          src="/assets/img/home-sushi-rolls.png"
          alt="sushis image d'accueil"
          className="home__img"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        <motion.div
          className="home__data"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="home__title">
            Savourez les

            <div>
              <img src="/assets/img/home-sushi-title.png" alt="" />
              Meilleurs Sushis
            </div>
          </h1>

          <p className="home__description">
            Profitez d&apos;un bon dîner avec les meilleurs plats de notre
            restaurant et égayez votre journée.
          </p>

          <a href="#" className="button">
            Commander <i className="ri-arrow-right-line"></i>
          </a>
        </motion.div>
      </div>

      <img src="/assets/img/leaf-branch-2.png" alt="" className="home__leaf-1" />
      <img src="/assets/img/leaf-branch-4.png" alt="" className="home__leaf-2" />
    </section>
  )
}
