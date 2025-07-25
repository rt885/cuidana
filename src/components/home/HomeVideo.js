const HomeVideo = () => {
  return (
    <section className="bg-secondary-background">
      <div className=" h-[30vh] md:h-[40vh] lg:h-[50vh] rounded-b-4xl md:rounded-b-[56px] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/enfermeria-home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HomeVideo;
