import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clock, Plane } from "lucide-react";
import { useState, useEffect } from "react";
import WorldMapSVG from "@/assets/worldMaps/world-map-1.svg?react";

const DestinationHighlightsSection = () => {
  const [hoveredDestination, setHoveredDestination] = useState<string | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const destinations = [
    {
      name: "Israel",
      flag: "🇮🇱",
      regulation: "Licensed under Israeli employment law",
      roles: ["Mason", "Agricultural Worker"],
      deploymentTime: "30-45 days",
      slug: "israel",
      coordinates: { x: 885, y: 245 },
      color: "hsl(var(--primary))",
      labelOffset: { x: 0, y: -35 }
    },
    {
      name: "Gulf Countries",
      flag: "🇦🇪",
      regulation: "Compliant with Gulf labor regulations",
      roles: ["Construction Worker", "Hotel Staff"],
      deploymentTime: "35-50 days",
      slug: "gulf",
      coordinates: { x: 960, y: 285 },
      color: "hsl(var(--secondary))",
      labelOffset: { x: 0, y: -35 }
    },
    {
      name: "Europe",
      flag: "🇪🇺",
      regulation: "EU work permit compliance",
      roles: ["Farm Worker", "Technical Specialist"],
      deploymentTime: "45-60 days", 
      slug: "europe",
      coordinates: { x: 775, y: 165 },
      color: "hsl(var(--primary-light))",
      labelOffset: { x: 0, y: 40 }
    }
  ];

  // Sri Lanka coordinates (origin)
  const sriLankaCoords = { x: 1080, y: 370 };

  // Generate curved path between two points
  const generateCurvedPath = (start: {x: number, y: number}, end: {x: number, y: number}) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 80;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Calculate point along quadratic bezier curve
  const getPointOnCurve = (start: {x: number, y: number}, end: {x: number, y: number}, t: number) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 80;
    
    const x = Math.pow(1-t, 2) * start.x + 2*t*(1-t) * midX + Math.pow(t, 2) * end.x;
    const y = Math.pow(1-t, 2) * start.y + 2*t*(1-t) * midY + Math.pow(t, 2) * end.y;
    
    return { x, y };
  };

  // Calculate path length for smooth animation
  const calculatePathLength = (start: {x: number, y: number}, end: {x: number, y: number}) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const straightDistance = Math.sqrt(dx * dx + dy * dy);
    // Approximate curved path length (about 1.2x straight distance for our curve)
    return straightDistance * 1.2;
  };

  return (
    <motion.section 
      className="py-16 bg-background"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Destination Highlights
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Deploy candidates to leading international markets
          </motion.p>
        </motion.div>
        
        {/* Interactive World Map */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <figure className="bg-card rounded-2xl overflow-hidden max-h-[70vh]">
            <div className="aspect-[16/9] md:aspect-[16/9] sm:aspect-[4/3] relative">
              <svg
                viewBox="0 0 1500 700"
                className="w-full max-h-[70vh]"
                role="img"
                aria-labelledby="map-title"
              >
                <title id="map-title">Routes from Sri Lanka to key international destinations</title>
                
                {/* Custom World Map SVG as background */}
                <g className="world-map-background" aria-hidden="true">
                  <WorldMapSVG 
                    className="w-full h-full opacity-80"
                    style={{
                      filter: "brightness(0.8) contrast(1.1)",
                      fill: "hsl(var(--muted) / 0.4)",
                      stroke: "hsl(var(--border))",
                      strokeWidth: "0.5"
                    }}
                    width="1500" 
                    height="700" 
                  />
                </g>

                {/* Animated route paths - Moving dashed lines only */}
                {destinations.map((destination, index) => {
                  const pathData = generateCurvedPath(sriLankaCoords, destination.coordinates);
                  const pathLength = calculatePathLength(sriLankaCoords, destination.coordinates);
                  const dashLength = 25;
                  const gapLength = 15;
                  const totalDashPattern = dashLength + gapLength;
                  
                  return (
                    <g key={destination.slug}>
                      {/* Moving dashed path */}
                      {!reducedMotion && (
                        <motion.path
                          d={pathData}
                          fill="none"
                          stroke={destination.color}
                          strokeWidth={hoveredDestination === destination.slug ? "4" : "3"}
                          strokeDasharray={`${dashLength} ${gapLength}`}
                          strokeLinecap="round"
                          strokeOpacity="0.8"
                          style={{
                            filter: "drop-shadow(0 0 4px rgba(0,0,0,0.3))"
                          }}
                          animate={{
                            strokeDashoffset: [0, -(totalDashPattern)]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.3
                          }}
                        />
                      )}
                      
                      {/* Static path for reduced motion */}
                      {reducedMotion && (
                        <path
                          d={pathData}
                          fill="none"
                          stroke={destination.color}
                          strokeWidth="2"
                          strokeDasharray="5 5"
                          strokeLinecap="round"
                          strokeOpacity="0.6"
                        />
                      )}
                    </g>
                  );
                })}

                {/* Smooth airplane animations */}
                {!reducedMotion && destinations.map((destination, index) => {
                  const pathLength = calculatePathLength(sriLankaCoords, destination.coordinates);
                  // Calculate consistent speed (pixels per second)
                  const speed = 50; // pixels per second
                  const duration = pathLength / speed;
                  
                  return (
                    <motion.g
                      key={`plane-${destination.slug}`}
                      style={{
                        offsetPath: `path('${generateCurvedPath(sriLankaCoords, destination.coordinates)}')`,
                        offsetDistance: "0%"
                      }}
                    >
                      <motion.g
                        animate={{
                          offsetDistance: ["0%", "100%"]
                        }}
                        transition={{
                          duration: duration,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 1.2
                        }}
                        style={{
                          offsetPath: `path('${generateCurvedPath(sriLankaCoords, destination.coordinates)}')`,
                        }}
                      >
                        <motion.circle
                          r="3"
                          fill={destination.color}
                          className="drop-shadow-sm"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.g
                          style={{ transform: "translate(-8px, -8px)" }}
                          animate={{
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Plane
                            size={16}
                            className="text-foreground"
                            style={{
                              filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
                              fill: destination.color
                            }}
                          />
                        </motion.g>
                      </motion.g>
                    </motion.g>
                  );
                })}

                {/* Alternative fallback airplane animation for browsers that don't support offset-path */}
                {!reducedMotion && destinations.map((destination, index) => {
                  const pathLength = calculatePathLength(sriLankaCoords, destination.coordinates);
                  const speed = 50;
                  const duration = pathLength / speed;
                  
                  return (
                    <motion.g
                      key={`plane-fallback-${destination.slug}`}
                      className="airplane-fallback"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.g
                        animate={{
                          x: [
                            sriLankaCoords.x,
                            ...Array.from({ length: 19 }, (_, i) => 
                              getPointOnCurve(sriLankaCoords, destination.coordinates, (i + 1) / 20).x
                            ),
                            destination.coordinates.x
                          ],
                          y: [
                            sriLankaCoords.y,
                            ...Array.from({ length: 19 }, (_, i) => 
                              getPointOnCurve(sriLankaCoords, destination.coordinates, (i + 1) / 20).y
                            ),
                            destination.coordinates.y
                          ]
                        }}
                        transition={{
                          duration: duration,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 1.2
                        }}
                        style={{ willChange: "transform" }}
                      >
                        <motion.circle
                          r="3"
                          fill={destination.color}
                          className="drop-shadow-sm"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.g
                          style={{ transform: "translate(-8px, -8px)" }}
                          animate={{
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Plane
                            size={16}
                            className="text-foreground"
                            style={{
                              filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
                              fill: destination.color
                            }}
                          />
                        </motion.g>
                      </motion.g>
                    </motion.g>
                  );
                })}

                {/* Destination markers with labels */}
                {destinations.map((destination, index) => (
                  <g key={`marker-${destination.slug}`}>
                    <motion.circle
                      cx={destination.coordinates.x}
                      cy={destination.coordinates.y}
                      r="10"
                      fill={destination.color}
                      stroke="hsl(var(--background))"
                      strokeWidth="3"
                      className="cursor-pointer drop-shadow-sm"
                      aria-label={`${destination.name} destination`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                      whileHover={{ scale: 1.3 }}
                      onMouseEnter={() => setHoveredDestination(destination.slug)}
                      onMouseLeave={() => setHoveredDestination(null)}  
                    />
                    
                    {/* Country name label */}
                    <motion.text
                      x={destination.coordinates.x + destination.labelOffset.x}
                      y={destination.coordinates.y + destination.labelOffset.y}
                      textAnchor="middle"
                      className="text-sm font-semibold fill-current text-foreground drop-shadow-sm pointer-events-none select-none"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.2 }}
                      style={{
                        filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
                        WebkitTextStroke: "0.5px hsl(var(--background))"
                      }}
                    >
                      {destination.name}
                    </motion.text>

                    {/* Enhanced tooltip on hover */}
                    {hoveredDestination === destination.slug && (
                      <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <rect
                          x={destination.coordinates.x - 60}
                          y={destination.coordinates.y - 70}
                          width="120"
                          height="45"
                          rx="8"
                          fill="hsl(var(--popover))"
                          stroke="hsl(var(--border))"
                          strokeWidth="1"
                          className="drop-shadow-lg"
                        />
                        <text
                          x={destination.coordinates.x}
                          y={destination.coordinates.y - 55}
                          textAnchor="middle"
                          className="text-xs font-medium fill-current text-popover-foreground"
                        >
                          {destination.roles[0]}
                        </text>
                        <text
                          x={destination.coordinates.x}
                          y={destination.coordinates.y - 42}
                          textAnchor="middle"
                          className="text-xs fill-current text-muted-foreground"
                        >
                          {destination.deploymentTime}
                        </text>
                      </motion.g>
                    )}  
                  </g>
                ))}

                {/* Sri Lanka origin marker with label */}
                <g>
                  {!reducedMotion && (
                    <motion.circle
                      cx={sriLankaCoords.x}
                      cy={sriLankaCoords.y}
                      r="25"
                      fill="hsl(var(--primary) / 0.2)"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.4, 0.1, 0.4]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ willChange: "transform, opacity" }}
                    />
                  )}
                  
                  <motion.circle
                    cx={sriLankaCoords.x}
                    cy={sriLankaCoords.y}
                    r="12"
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--background))"
                    strokeWidth="4"
                    className="drop-shadow-sm"
                    aria-label="Sri Lanka origin point"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  />
                  
                  <motion.text
                    x={sriLankaCoords.x}
                    y={sriLankaCoords.y + 35}
                    textAnchor="middle"
                    className="text-sm font-semibold fill-current text-foreground drop-shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                    style={{
                      filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
                      WebkitTextStroke: "0.5px hsl(var(--background))"
                    }}
                  >
                    Sri Lanka
                  </motion.text>
                </g>
              </svg>
            </div>
            <figcaption className="sr-only">
              Interactive map showing employment routes from Sri Lanka to Israel, Gulf countries, and Europe
            </figcaption>
          </figure>
        </motion.div>

        {/* Destination Cards */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6 + index * 0.15, 
                ease: "easeOut" 
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="hover-lift h-full">
                <CardHeader>
                  <motion.div 
                    className="flex items-center gap-3 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="text-3xl"
                      initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 1.0 + index * 0.15,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {destination.flag}
                    </motion.span>
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.1 + index * 0.15 
                      }}
                      viewport={{ once: true }}
                    >
                      <CardTitle className="text-xl">{destination.name}</CardTitle>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.2 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    <CardDescription className="text-sm">{destination.regulation}</CardDescription>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.3 + index * 0.15 
                      }}
                      viewport={{ once: true }}
                    >
                      <p className="font-medium text-sm text-muted-foreground mb-1">Sample Roles:</p>
                      <p className="text-sm">{destination.roles.join(", ")}</p>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.4 + index * 0.15 
                      }}
                      viewport={{ once: true }}
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      Avg deployment: {destination.deploymentTime}
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 1.5 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      View Destination
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default DestinationHighlightsSection;