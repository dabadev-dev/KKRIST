
import SectionHero from '../components/section-Hero'
import SectionFooter from '../components/Section-Footer'
import { Outlet } from 'react-router-dom'

export default function HomeLayout() {
  return (
    <div>
       {/* Header */}
        <SectionHero />
        <Outlet/>
        {/* Footer */}
        <SectionFooter />
    </div>
  )
}
