import React, { useEffect, useState } from "react";

export default function FormatDate({ seconds }) {
  const [data, setData] = useState("");

  const format = (seconds) => {
    if (!seconds) return "";

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    if (parseInt(hours, 10) > 0) {
      console.log(hours)
      setData(`${parseInt(hours, 10)}h ${min}m ${sec}s`);
    } else if (min == 0) {
      setData(`${sec}s`);
    } else {
      setData(`${min}h ${sec}m`);
    }
  };

  useEffect(() => {
    format(seconds);
  }, [seconds]);

  return <span>{data}</span>;
}
