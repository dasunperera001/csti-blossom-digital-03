import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clock, Plane } from "lucide-react";
import { useState, useEffect } from "react";

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
      coordinates: { x: 520, y: 320 }, // Tel Aviv area
      color: "hsl(var(--primary))"
    },
    {
      name: "GCC Countries",
      flag: "🇦🇪",
      regulation: "Compliant with Gulf labor regulations",
      roles: ["Construction Worker", "Hotel Staff"],
      deploymentTime: "35-50 days",
      slug: "gcc",
      coordinates: { x: 580, y: 350 }, // Dubai/UAE area
      color: "hsl(var(--secondary))"
    },
    {
      name: "Europe",
      flag: "🇪🇺",
      regulation: "EU work permit compliance",
      roles: ["Farm Worker", "Technical Specialist"],
      deploymentTime: "45-60 days", 
      slug: "europe",
      coordinates: { x: 480, y: 240 }, // Germany/Central Europe
      color: "hsl(var(--primary-light))"
    }
  ];

  // Sri Lanka coordinates (origin)
  const sriLankaCoords = { x: 650, y: 420 };

  // Generate curved path between two points
  const generateCurvedPath = (start: {x: number, y: number}, end: {x: number, y: number}) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 80; // Curve upward
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Calculate point along quadratic bezier curve
  const getPointOnCurve = (start: {x: number, y: number}, end: {x: number, y: number}, t: number) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 80;
    
    // Quadratic bezier formula: B(t) = (1-t)²P₀ + 2t(1-t)P₁ + t²P₂
    const x = Math.pow(1-t, 2) * start.x + 2*t*(1-t) * midX + Math.pow(t, 2) * end.x;
    const y = Math.pow(1-t, 2) * start.y + 2*t*(1-t) * midY + Math.pow(t, 2) * end.y;
    
    return { x, y };
  };

  return (
    <motion.section 
      className="py-16 bg-background"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
          <figure className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
            <div className="aspect-[16/9] md:aspect-[16/9] sm:aspect-[4/3] relative">
              <svg
                viewBox="0 0 800 500"
                className="w-full h-full"
                role="img"
                aria-labelledby="map-title"
              >
                <title id="map-title">Routes from Sri Lanka to key international destinations</title>
                
                {/* Simplified world map outline */}
                <g className="map-outlines" aria-hidden="true">
                  {/* Africa */}
                  <path
                    d="M400 250 Q420 280 440 350 Q430 400 420 450 Q380 460 360 450 Q340 420 350 380 Q360 340 380 300 Q390 270 400 250 Z"
                    fill="hsl(var(--muted) / 0.3)"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                  />
                  {/* Europe */}
                  <path
                    d="M450 180 Q480 200 500 220 Q520 240 510 260 Q490 270 470 260 Q450 250 440 230 Q430 200 450 180 Z"
                    fill="hsl(var(--muted) / 0.3)"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                  />
                  {/* Asia */}
                  <path
                    d="M500 200 Q550 220 600 250 Q650 280 680 320 Q700 360 690 400 Q670 420 640 410 Q600 390 570 370 Q540 340 520 300 Q500 260 500 200 Z"
                    fill="hsl(var(--muted) / 0.3)"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                  />
                  {/* Middle East */}
                  <path
                    d="M480 280 Q520 300 550 320 Q570 340 560 360 Q540 370 520 360 Q500 350 490 330 Q480 310 480 280 Z"
                    fill="hsl(var(--muted) / 0.3)"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                  />
                </g>

                {/* Animated route paths */}
                {destinations.map((destination, index) => {
                  const pathData = generateCurvedPath(sriLankaCoords, destination.coordinates);
                  return (
                    <g key={destination.slug}>
                      {/* Base path */}
                      <motion.path
                        d={pathData}
                        fill="none"
                        stroke={destination.color}
                        strokeWidth={hoveredDestination === destination.slug ? "3" : "2"}
                        strokeOpacity="0.4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.8 + index * 0.3, ease: "easeInOut" }}
                      />
                      
                      {/* Animated traveling dash */}
                      {!reducedMotion && (
                        <motion.path
                          d={pathData}
                          fill="none"
                          stroke={destination.color}
                          strokeWidth="3"
                          strokeDasharray="20 40"
                          strokeLinecap="round"
                          animate={{
                            strokeDashoffset: [0, -60]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.5
                          }}
                        />
                      )}
                      
                      {/* Traveling plane icon */}
                      {!reducedMotion && (
                        <motion.g
                          initial={{ x: sriLankaCoords.x, y: sriLankaCoords.y }}
                          animate={{
                            x: [
                              sriLankaCoords.x,
                              ...Array.from({ length: 9 }, (_, i) => 
                                getPointOnCurve(sriLankaCoords, destination.coordinates, (i + 1) / 10).x
                              ),
                              destination.coordinates.x
                            ],
                            y: [
                              sriLankaCoords.y,
                              ...Array.from({ length: 9 }, (_, i) => 
                                getPointOnCurve(sriLankaCoords, destination.coordinates, (i + 1) / 10).y
                              ),
                              destination.coordinates.y
                            ]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.7
                          }}
                        >
                          <Plane
                            size={12}
                            className="text-foreground"
                            style={{ transform: "translate(-6px, -6px)" }}
                          />
                        </motion.g>
                      )}
                    </g>
                  );
                })}

                {/* Destination markers */}
                {destinations.map((destination, index) => (
                  <g key={`marker-${destination.slug}`}>
                    <motion.circle
                      cx={destination.coordinates.x}
                      cy={destination.coordinates.y}
                      r="8"
                      fill={destination.color}
                      stroke="hsl(var(--background))"
                      strokeWidth="2"
                      className="cursor-pointer"
                      aria-label={`${destination.name} destination`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                      whileHover={{ scale: 1.3 }}
                      onMouseEnter={() => setHoveredDestination(destination.slug)}
                      onMouseLeave={() => setHoveredDestination(null)}  
                    />
                    
                    {/* Tooltip on hover */}
                    {hoveredDestination === destination.slug && (
                      <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <rect
                          x={destination.coordinates.x - 30}
                          y={destination.coordinates.y - 45}
                          width="60"
                          height="25"
                          rx="4"
                          fill="hsl(var(--popover))"
                          stroke="hsl(var(--border))"
                          strokeWidth="1"
                        />
                        <text
                          x={destination.coordinates.x}
                          y={destination.coordinates.y - 28}
                          textAnchor="middle"
                          className="text-xs fill-current text-popover-foreground"
                        >
                          {destination.name}
                        </text>
                      </motion.g>
                    )}  
                  </g>
                ))}

                {/* Sri Lanka origin marker with pulsing halo */}
                <g>
                  {!reducedMotion && (
                    <motion.circle
                      cx={sriLankaCoords.x}
                      cy={sriLankaCoords.y}
                      r="20"
                      fill="hsl(var(--primary) / 0.2)"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.1, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ willChange: "transform, opacity" }}
                    />
                  )}
                  
                  <motion.circle
                    cx={sriLankaCoords.x}
                    cy={sriLankaCoords.y}
                    r="10"
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--background))"
                    strokeWidth="3"
                    aria-label="Sri Lanka origin point"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  />
                  
                  <text
                    x={sriLankaCoords.x}
                    y={sriLankaCoords.y + 25}
                    textAnchor="middle"
                    className="text-sm font-medium fill-current text-foreground"
                  >
                    Sri Lanka
                  </text>
                </g>

                {/* Legend */}
                <g className="legend">
                  <rect
                    x="620"
                    y="30" 
                    width="160"
                    height="100"
                    rx="8"
                    fill="hsl(var(--card) / 0.9)"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                  />
                  <text
                    x="700"
                    y="50"
                    textAnchor="middle"
                    className="text-sm font-semibold fill-current text-card-foreground"
                  >
                    Destinations
                  </text>
                  
                  {destinations.map((destination, index) => (
                    <g key={`legend-${destination.slug}`}>
                      <circle
                        cx="635"
                        cy={70 + index * 18}
                        r="4"
                        fill={destination.color}
                      />
                      <text
                        x="645"
                        y={75 + index * 18}
                        className="text-xs fill-current text-card-foreground"
                        role="button"
                        tabIndex={0}
                        onMouseEnter={() => setHoveredDestination(destination.slug)}
                        onMouseLeave={() => setHoveredDestination(null)}
                        onFocus={() => setHoveredDestination(destination.slug)}
                        onBlur={() => setHoveredDestination(null)}
                      >
                        {destination.name}
                      </text>
                    </g>
                  ))}
                </g>
              </svg>
            </div>
            <figcaption className="sr-only">
              Interactive map showing employment routes from Sri Lanka to Israel, GCC countries, and Europe
            </figcaption>
          </figure>
        </motion.div>

        {/* Destination Cards */}
        <div className="grid md:grid-cols-3 gap-8">
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