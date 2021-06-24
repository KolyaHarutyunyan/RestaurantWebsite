import { SectionContainer } from "./styles";
import { useContext, useEffect, useRef } from "react";
import { Context } from "./context";
export const Section = ({ children, of }) => {
  const { setRefs } = useContext(Context);
  const sectionRef = useRef();

  useEffect(() => {
    setRefs((snapshot) => [...snapshot, { name: of, ref: sectionRef }]);
  }, []);

  return <SectionContainer ref={sectionRef}>{children}</SectionContainer>;
};
