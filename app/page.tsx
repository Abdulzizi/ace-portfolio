import Hero from "@/components/Hero";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden max-auto sm:pz-10 px-5">
      <div className="max-1-7xl w-full">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
