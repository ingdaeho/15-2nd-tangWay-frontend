import React from "react";
import styled from "styled-components";
import ReservationDetail from "./ReservationDetail";

const ITEM1 = {
  section: "구간1",
};

const ITEM2 = {
  section: "구간2",
};

const SectionInfo = () => (
  <ReservationSection>
    <ReservationDetail item={ITEM1} />
    <ReservationDetail item={ITEM2} />
  </ReservationSection>
);

export default SectionInfo;

const ReservationSection = styled.ul`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
