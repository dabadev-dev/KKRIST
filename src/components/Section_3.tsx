import { bestsellerLists } from '../types/data'
import { Bestseller } from './card'

export default function Section_3() {
  return (
    <div>
      <section className="md:px-16 mb-10 mt-10">
          <h2 className="text-2xl text-center font-bold mb-8 mt-10">
            Our Bestseller
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {bestsellerLists.map((bestseller, index) => (
              <Bestseller key={index} {...bestseller} />
            ))}
          </div>
        </section>
    </div>
  )
}
