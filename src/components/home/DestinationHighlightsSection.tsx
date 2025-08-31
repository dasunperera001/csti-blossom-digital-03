import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clock, Plane } from "lucide-react";
import { useState, useEffect } from "react";
// import WorldMapSVG from "@/assets/worldMaps/world-map-1.svg?react";
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
      coordinates: { x: 485, y: 225 }, // Tel Aviv area - adjust these based on your SVG
      color: "hsl(var(--primary))"
    },
    {
      name: "Gulf Countries",
      flag: "🇦🇪",
      regulation: "Compliant with Gulf labor regulations",
      roles: ["Construction Worker", "Hotel Staff"],
      deploymentTime: "35-50 days",
      slug: "gulf",
      coordinates: { x: 515, y: 220 }, // Dubai/UAE area - adjust these based on your SVG
      color: "hsl(var(--secondary))"
    },
    {
      name: "Europe",
      flag: "🇪🇺",
      regulation: "EU work permit compliance",
      roles: ["Farm Worker", "Technical Specialist"],
      deploymentTime: "45-60 days", 
      slug: "europe",
      coordinates: { x: 410, y: 155 }, // Germany/Central Europe - adjust these based on your SVG
      color: "hsl(var(--primary-light))"
    }
  ];

  // Sri Lanka coordinates (origin) - adjust based on your SVG
  const sriLankaCoords = { x: 580, y: 260 };

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
                    width="800" 
                    height="500" 
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
                        strokeOpacity="0.7"
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
                          strokeOpacity="0.8"
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
                            size={14}
                            className="text-primary drop-shadow-sm"
                            style={{ transform: "translate(-7px, -7px)" }}
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
                    
                    {/* Tooltip on hover */}
                    {hoveredDestination === destination.slug && (
                      <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <rect
                          x={destination.coordinates.x - 40}
                          y={destination.coordinates.y - 50}
                          width="80"
                          height="30"
                          rx="6"
                          fill="hsl(var(--popover))"
                          stroke="hsl(var(--border))"
                          strokeWidth="1"
                          className="drop-shadow-md"
                        />
                        <text
                          x={destination.coordinates.x}
                          y={destination.coordinates.y - 30}
                          textAnchor="middle"
                          className="text-sm font-medium fill-current text-popover-foreground"
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
                  
                  <text
                    x={sriLankaCoords.x}
                    y={sriLankaCoords.y + 30}
                    textAnchor="middle"
                    className="text-sm font-semibold fill-current text-foreground drop-shadow-sm"
                  >
                    Sri Lanka
                  </text>
                </g>

                {/* Legend */}
                <g className="legend">
                  <rect
                    x="600"
                    y="20" 
                    width="180"
                    height="120"
                    rx="10"
                    fill="hsl(var(--card) / 0.95)"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                    className="drop-shadow-sm"
                  />
                  <text
                    x="690"
                    y="45"
                    textAnchor="middle"
                    className="text-sm font-semibold fill-current text-card-foreground"
                  >
                    Deployment Routes
                  </text>
                  
                  {destinations.map((destination, index) => (
                    <g key={`legend-${destination.slug}`}>
                      <circle
                        cx="620"
                        cy={70 + index * 22}
                        r="5"
                        fill={destination.color}
                      />
                      <text
                        x="635"
                        y={76 + index * 22}
                        className="text-xs fill-current text-card-foreground cursor-pointer"
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
              Interactive map showing employment routes from Sri Lanka to Israel, Gulf countries, and Europe
            </figcaption>
          </figure>
        </motion.div>

        {/* Destination Cards - rest of the component remains the same */}
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