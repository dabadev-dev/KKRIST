import { Story } from "./card";
import { storyLists } from "../types/data";

export default function Section_6() {
  return (
    <div>
      <section className="md:px-16 mb-10 mt-10">
        <h2 className="text-2xl text-center font-bold mb-8 mt-10">
          Our Instagram Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {storyLists.map((story, index) => (
            <Story key={index} {...story} />
          ))}
        </div>
      </section>
    </div>
  );
}
