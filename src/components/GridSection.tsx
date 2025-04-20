import TestimonialCard from "./TestimonialCard";
import data from "../utils/data.json";

export default function GridSection() {
  return (
    <section className="grid gap-4 grid-col-1 md:grid-cols-2 w-[min(95%,35rem)]  lg:grid-cols-4 md:w-[min(85%,45rem)]  lg:w-[min(75%,1920px)] mx-auto py-4">
      {data.map((testimonial) => (
        <TestimonialCard
          key={testimonial.name}
          name={testimonial.name}
          title={testimonial.title}
          bgColor={testimonial.bgColor}
          textColor={testimonial.textColor}
          headline={testimonial.headline}
          quote={testimonial.quote}
          borderColor={testimonial.borderColor}
          otherCSS={testimonial.otherCSS}
        />
      ))}
    </section>
  );
}
