import { useState, useRef, MouseEvent } from "react";

// Define types for the return values of the hook
interface IndicatorStyle {
  width: number;
  left: number;
}

interface HoverIndicator {
  hoveredElement: HTMLElement | null;
  handleMouseOver: (e: MouseEvent<HTMLElement>) => void;
  handleMouseOut: () => void;
  indicatorStyle: IndicatorStyle;
  containerRef: React.RefObject<HTMLDivElement>;
}

const useHoverIndicator = (): HoverIndicator => {
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({ width: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = (e: MouseEvent<HTMLElement>): void => {
    const elementRect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (containerRect) {
      setIndicatorStyle({
        width: elementRect.width,
        left: elementRect.left - containerRect.left,
      });
    }
    setHoveredElement(e.currentTarget);
  };

  const handleMouseOut = (): void => {
    setHoveredElement(null);
    setIndicatorStyle({ width: 0, left: 0 });
  };

  return { hoveredElement, handleMouseOver, handleMouseOut, indicatorStyle, containerRef };
};

export default useHoverIndicator;
