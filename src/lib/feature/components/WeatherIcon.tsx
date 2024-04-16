import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  Snowflake,
  Sun,
} from "lucide-react";

export function getWeatherIcon(code: string) {
  switch (code) {
    case "01d":
      return <Sun />;
    case "01n":
      return <Sun />;
    case "02d":
      return <Cloud />;
    case "02n":
      return <Cloud />;
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return <Cloud />;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
      return <CloudRain />;
    case "11d":
    case "11n":
      return <CloudLightning />;
    case "13d":
    case "13n":
      return <Snowflake />;
    case "50d":
    case "50n":
      return <CloudFog />;
    default:
      return null;
  }
}
