import React, { useState, useEffect } from "react";
import ChooseItienrary from "./ChooseItienrary";

function Booking() {
  const [itienrary, setItienrary] = useState([]);
  const [serviceSection, setserviceSection] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/config/itienrary.json")
      .then((res) => res.json())
      .then((res) => {
        const section = res.itienrary.section1.service_section;
        const addOn = res.itienrary.section1.time.map((item) => {
          return { ...item, on: false };
        });
        setserviceSection(section);
        setItienrary(addOn);
      });
  }, []);

  const selectTicket = (ticket) => {
    const filterItem = itienrary.map((item) => {
      if (item.id === ticket.id) {
        if (ticket.on) {
          return { ...item, on: false };
        }
        return { ...item, on: true };
      } else {
        return { ...item, on: false };
      }
    });
    setItienrary(filterItem);
  };

  return (
    <ChooseItienrary
      key={itienrary.id}
      itienrary={itienrary}
      onTicketClick={selectTicket}
      serviceSection={serviceSection}
    />
  );
}

export default Booking;
