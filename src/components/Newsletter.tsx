'use client'

import { motion } from 'framer-motion'

export default function Newsletter() {
  return (
    <section className="newsletter section">
      <motion.div
        className="newsletter__container container"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="newsletter__content grid">
          <img
            src="/assets/img/newsletter-sushi.png"
            alt="sushi newsletter"
            className="newsletter__img"
          />

          <div className="newsletter__data">
            <span className="section__subtitle">Newsletter</span>
            <h2 className="section__title">
              Abonnez-vous pour <br />
              Nos Offres
            </h2>

            <form action="" className="newsletter__form">
              <input
                type="email"
                placeholder="Entrez votre email"
                className="newsletter__input"
              />
              <button type="submit" className="button newsletter__button">
                S&apos;abonner <i className="ri-send-plane-line"></i>
              </button>
            </form>
          </div>
        </div>

        <img
          src="/assets/img/spinach-leaf.png"
          alt=""
          className="newsletter__spinach"
        />
      </motion.div>
    </section>
  )
}
