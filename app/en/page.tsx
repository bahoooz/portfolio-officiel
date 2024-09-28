export default function Home() {
  return (
    <div className="dark:bg-[#241F19]">
      <header className="z-10 relative h-screen text-center pt-32">
        <div className="absolute inset-0 -z-10"></div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 dark:-z-30"
          autoPlay
          muted
          loop
        >
          <source src="/assets/bg-portfolio-light.mp4" type="video/mp4" />
        </video>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
          autoPlay
          muted
          loop
        >
          <source src="/assets/bg-portfolio-dark.mp4" type="video/mp4" />
        </video>
        <h1 className="dark:text-white text-black">Hello</h1>
      </header>
    </div>
  );
}
