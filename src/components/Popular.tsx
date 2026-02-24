'use client'

import { motion } from 'framer-motion'

const dishes = [
  {
    img: '/assets/img/popular-onigiri.png',
    name: 'Onigiri',
    description: 'Plat Japonais',
    price: '10,99 €',
  },
  {
    img: '/assets/img/popular-spring-rols.png',
    name: 'Rouleaux de Printemps',
    description: 'Plat Japonais',
    price: '15,99 €',
  },
  {
    img: '/assets/img/popular-sushi-rolls.png',
    name: 'Sushi Rolls',
    description: 'Plat Japonais',
    price: '19,99 €',
  },
]

export default function Popular() {
  return (
    <section className="popular section" id="popular">
      <span className="section__subtitle">La Meilleure Cuisine</span>
      <h2 className="section__title">Plats Populaires</h2>

      <div className="popular__container container grid">
        {dishes.map((dish, index) => (
          <motion.article
            key={dish.name}
            className="popular__card"
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
          >
            <img src={dish.img} alt={dish.name} className="popular__img" />

            <h3 className="popular__name">{dish.name}</h3>
            <span className="popular__description">{dish.description}</span>

            <span className="popular__price">{dish.price}</span>

            <button className="popular__button" aria-label="Ajouter au panier">
              <i className="ri-shopping-bag-line"></i>
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
