"use client";
import React, { useState, useEffect } from "react";

const CopenhagenTime: React.FC = () => {
  // State to hold the current time as a string
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Function to update the time
    const updateTime = (): void => {
      // Create a new Date object and set it to Copenhagen's timezone
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Copenhagen",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat("en-GB", options);
      setTime(formatter.format(now));
    };

    // Set the interval to update the time every second
    const timerId = setInterval(updateTime, 1000);

    // Clear the interval on component unmount
    return (): void => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <p className="font-bold">Local time</p>
      <p className="">{time}</p>
    </div>
  );
};

export default CopenhagenTime;
