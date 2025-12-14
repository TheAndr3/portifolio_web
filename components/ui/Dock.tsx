"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  MotionValue,
  SpringOptions,
} from "framer-motion";
import {
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState,
  ReactNode,
  ReactElement,
  isValidElement,
} from "react";
import { cn } from "@/lib/utils";

interface DockProps {
  items: { icon: ReactNode; label: string; onClick: () => void }[];
  className?: string;
  spring?: SpringOptions;
  magnification?: number; // Largura máxima do item ao passar o mouse
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number; // Largura base do item
}

interface DockItemProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  distance: number;
  magnification: number;
  baseItemSize: number;
}

interface DockChildProps {
  children?: ReactNode;
  className?: string;
  isHovered?: MotionValue<number>;
}

function DockItem({
  children,
  className,
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetWidth = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  
  const width = useSpring(targetWidth, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width, 
        height: baseItemSize , 
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center",
        "rounded-full border shadow-sm cursor-pointer outline-none transition-colors", 
        "bg-white border-gray-200",
        "dark:bg-[#060010] dark:border-[#222]",
        className
      )}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<DockChildProps>, { isHovered });
        }
        return child;
      })}
    </motion.div>
  );
}

function DockLabel({ children, className, isHovered }: DockChildProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on("change", (latest: number) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: -10 }} 
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute -top-10 left-1/2 w-fit whitespace-pre px-2 py-1", 
            "text-xs rounded-md border shadow-sm",
            "transform -translate-x-1/2 pointer-events-none", 
            "bg-white border-gray-200 text-neutral-700",
            "dark:bg-[#060010] dark:border-[#222] dark:text-white",
            className
          )}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className }: DockChildProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {/* O ícone fica centralizado e o container cresce ao redor dele */}
      {children}
    </div>
  );
}

export default function Dock({
  items,
  className,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 80, // Aumentei um pouco a largura máxima padrão
  distance = 200,
  panelHeight = 64, // Altura fixa do painel
  baseItemSize = 50, // Tamanho base (altura fixa dos itens)
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  return (
    <motion.div
      className={cn("mx-2 flex max-w-full items-center", className)}
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={cn(
          "mx-auto flex w-fit gap-3 rounded-full px-3", 
          "items-center border", // items-center para centralizar verticalmente
          "bg-white/80 border-gray-200",
          "dark:bg-[#060010]/80 dark:border-[#222]",
          "backdrop-blur-md transition-all duration-300 ease-out"
        )}
        // A altura do painel agora é fixa + um pouco de padding
        style={{ height: panelHeight }} 
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}