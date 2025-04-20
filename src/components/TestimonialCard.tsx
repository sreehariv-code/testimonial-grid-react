interface TestimonialCardProps {
  name: string;
  title: string;
  bgColor: string;
  textColor: string;
  headline: string;
  quote: string;
  borderColor: string;
  otherCSS?: string;
}

export default function TestimonialCard(
  testimonialProps: TestimonialCardProps
) {
  const {
    name,
    title,
    bgColor,
    textColor,
    headline,
    quote,
    borderColor,
    otherCSS,
  } = testimonialProps;
  return (
    <article
      className={`${bgColor} ${textColor} p-9 rounded-lg shadow-md flex flex-col ${otherCSS} max-h-min`}
    >
      <header className="flex items-center gap-4 mb-4">
        {/* Image */}
        <section
          className={`relative w-10 h-10 rounded-full overflow-hidden border-2 ${borderColor}`}
        >
          <img
            src={`./images/image-${name.split(" ")[0].toLowerCase()}.jpg`}
            alt="picture of daniel"
            className=""
          />
        </section>
        {/* Name and description */}
        <section>
          <h2 className={`text-base font-bold`}>{name}</h2>
          <p className="opacity-70 text-sm">{title}</p>
        </section>
      </header>
      <div className="content gap-4 flex flex-col">
        <h3 className="text-lg font-bold">{headline}</h3>
        <p className="opacity-70 text-sm">{quote}</p>
      </div>
    </article>
  );
}
