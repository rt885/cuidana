const HomeVideo = () => {
  return (
    <section className=" h-[50vh] md:h-[40vh] lg:h-[50vh] rounded-b-[56px] overflow-hidden">
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
    </section>
  );
};

export default HomeVideo;
