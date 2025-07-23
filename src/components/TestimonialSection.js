const TestimonialSection = () => {
  return (
    <section className="bg-secondary-background rounded-b-[56px]">
      <div className="bg-accent-background py-16 rounded-b-[56px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary-text">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial cards will go here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
