import CurrentWeather from "@/lib/feature/components/CurrentWeather";
import HourlyForecast from "@/lib/feature/components/HourlyForcast";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center p-16">
      <div className="max-w-screen-2xl flex flex-col gap-8">
        <CurrentWeather />
        <HourlyForecast />
      </div>
    </div>
  );
}
