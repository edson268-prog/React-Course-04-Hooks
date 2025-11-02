import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  // Countdown Effect
  useEffect(() => {
    if (countdown === 0) return;

    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      // console.log("Cleanup Effect");
      clearInterval(intervalId);
    };
  }, [countdown]); //Deps o dependencies // opcionales // si countdown cambia se ejecuta

  type TrafficLightColor = keyof typeof colors;

  const handleColorChange = (color: TrafficLightColor) => {
    setLight((prev) => {
      console.log({ prev });
      return color;
    });
  };

  // Change light color effect
  useEffect(() => {
    if (countdown > 0) return;

    setCountdown(5);

    if (countdown === 0) {
      setCountdown(5);
      if (light === "red") {
        setLight("green");
      }
      if (light === "yellow") {
        setLight("red");
      }
      if (light === "green") {
        setLight("yellow");
      }
      return;
    }

    // return () => {
    //   second
    // }
  }, [countdown, light]);

  return {
    //Prpps
    countdown,
    light,
    colors,

    //Computed
    percentage: (countdown / 5) * 100,
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    redLight: light === "red" ? colors.red : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",
  };
};
