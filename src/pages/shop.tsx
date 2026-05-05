import SectionHero from '../components/section-Hero'
import Section_1 from '../components/section_1'
import Section_2 from '../components/Section_2'
import SectionFooter from '../components/Section-Footer'
import Section_3 from '../components/Section_3'
import Section_4 from '../components/Section_4'
import Section_5 from '../components/Section_5'
import Section_6 from '../components/Section_6'

export default function ShopPage() {
  return (
    <div className="bg-white text-gray-800 px-4">
        {/* Header */}
        <SectionHero />
        {/* Main Content */}
        <main className="space-y-26">
          <Section_1 />
          <Section_2 />
          <Section_3 />
          <Section_4 />
          <Section_5 />
          <Section_6 />
        </main>
        {/* Footer */}
        <SectionFooter />
      </div>
  )
}