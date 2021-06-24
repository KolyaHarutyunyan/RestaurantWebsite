import { useContext, useEffect, useRef } from "react";
import { ContentContainer } from "./styles";
import { Context } from "./context";

export const Container = ({ children }) => {
  const { height, refs, activeTab, setActiveTab } = useContext(Context);
  const containerRef = useRef();

  useEffect(() => {
    if (refs.length && activeTab.action === "HEADER") {
      const currentSection = refs.find(
        (section) => section.name === activeTab.name
      );
      containerRef.current.scrollTo({
        top: currentSection.ref.current.offsetTop - 50,
        behavior: "smooth",
      });
    }
  }, [activeTab, refs]);

  const onContainerScroll = (e) => {
    const containerScroll = containerRef.current.scrollTop - 50;
    for (const ref of refs) {
      if (
        ref.ref.current.offsetTop < containerScroll &&
        containerScroll > ref.ref.current.offsetHeight
      ) {
        setActiveTab({ name: ref.name, action: "SCROLL" });
      }
    }
  };

  return (
    <ContentContainer
      ref={containerRef}
      onScroll={onContainerScroll}
      height={height}
    >
      {children}
    </ContentContainer>
  );
};
