import Header from '@/components/Header'
import Home from '@/components/Home'
import About from '@/components/About'
import Popular from '@/components/Popular'
import Recently from '@/components/Recently'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import ScrollUp from '@/components/ScrollUp'

export default function Page() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Popular />
        <Recently />
        <Newsletter />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}
