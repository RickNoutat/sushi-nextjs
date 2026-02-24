'use client'

import { motion } from 'framer-motion'

export default function Recently() {
  return (
    <section className="recently section" id="recently">
      <div className="recently__container container grid">
        <motion.div
          className="recently__data"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="section__subtitle">Nouveauté</span>
          <h2 className="section__title">
            Sushi Samourai <br />
            Saumon Fromage
          </h2>

          <p className="recently__description">
            Découvrez nos nouvelles créations. Ne vous privez pas d&apos;un bon
            repas, savourez et soyez heureux.
          </p>

          <a href="#" className="button">
            Commander <i className="ri-arrow-right-line"></i>
          </a>

          <img
            src="/assets/img/spinach-leaf.png"
            alt=""
            className="recently__data-img"
          />
        </motion.div>

        <motion.img
          src="/assets/img/recently-salmon-sushi.png"
          alt="sushi saumon récent"
          className="recently__img"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>

      <img src="/assets/img/leaf-branch-2.png" alt="" className="recently__leaf-1" />
      <img src="/assets/img/leaf-branch-3.png" alt="" className="recently__leaf-2" />
    </section>
  )
}
