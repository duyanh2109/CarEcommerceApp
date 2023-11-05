import { CustomFilter, Hero, SearchBar } from "@/components";
import { callApi } from "@/utils";
import { CarCard } from "@/components";
export default async function Home() {
  const allCar = await callApi();
  const isDataEmpty = !Array.isArray(allCar) || allCar.length === 0;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the car you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCar?.map((car,index) => (
                <CarCard car={car} key={index} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">oops no result</h2>
            <p>{allCar?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
