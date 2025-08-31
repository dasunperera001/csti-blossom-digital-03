import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Plane, MapPin, TrendingUp, Users, Globe, CheckCircle } from "lucide-react";
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
      coordinates: { x: 550, y: 200 },
      color: "hsl(var(--primary))",
      stats: { placements: "500+", success: "95%" }
    },
    {
      name: "Gulf Countries",
      flag: "🇦🇪",
      regulation: "Compliant with Gulf labor regulations",
      roles: ["Construction Worker", "Hotel Staff"],
      deploymentTime: "35-50 days",
      slug: "gulf",
      coordinates: { x: 600, y: 250 },
      color: "hsl(var(--secondary))",
      stats: { placements: "1200+", success: "92%" }
    },
    {
      name: "Europe",
      flag: "🇪🇺",
      regulation: "EU work permit compliance",
      roles: ["Farm Worker", "Technical Specialist"],
      deploymentTime: "45-60 days", 
      slug: "europe",
      coordinates: { x: 450, y: 150 },
      color: "hsl(var(--primary-light))",
      stats: { placements: "300+", success: "88%" }
    }
  ];

  // Sri Lanka coordinates (origin)
  const sriLankaCoords = { x: 650, y: 320 };

  // Generate curved path between two points
  const generateCurvedPath = (start: {x: number, y: number}, end: {x: number, y: number}) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 60;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Calculate point along quadratic bezier curve
  const getPointOnCurve = (start: {x: number, y: number}, end: {x: number, y: number}, t: number) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 60;
    
    const x = Math.pow(1-t, 2) * start.x + 2*t*(1-t) * midX + Math.pow(t, 2) * end.x;
    const y = Math.pow(1-t, 2) * start.y + 2*t*(1-t) * midY + Math.pow(t, 2) * end.y;
    
    return { x, y };
  };

  // World map path - simplified world outline
  const worldMapPath = "M100,280 Q200,250 300,260 Q400,240 500,250 Q600,230 700,240 Q800,220 900,230 Q1000,210 1100,220 L1100,350 Q1000,360 900,350 Q800,370 700,360 Q600,380 500,370 Q400,390 300,380 Q200,400 100,390 Z M150,200 Q250,180 350,190 Q450,170 550,180 Q650,160 750,170 Q850,150 950,160 Q1050,140 1150,150 L1150,280 Q1050,290 950,280 Q850,300 750,290 Q650,310 550,300 Q450,320 350,310 Q250,330 150,320 Z";

  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-background via-background to-muted/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Globe size={16} />
            Global Deployment Network
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold text-foreground mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Destination Highlights
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Connect with leading international markets through our established deployment networks. 
            Track real-time routes and success metrics across key destinations.
          </motion.p>
        </motion.div>
        
        {/* Interactive World Map */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-card via-card to-muted/10 rounded-3xl p-8 shadow-elegant border border-border/50 backdrop-blur-sm overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            
            {/* Map container */}
            <div className="relative aspect-[16/10] w-full max-h-[600px]">
              <svg
                viewBox="0 0 1200 480"
                className="w-full h-full"
                role="img"
                aria-labelledby="map-title"
              >
                <title id="map-title">Interactive deployment routes from Sri Lanka to international destinations</title>
                
                {/* Grid background */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3"/>
                  </pattern>
                  
                  {/* Gradient definitions */}
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--muted))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.1" />
                  </linearGradient>
                  
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Grid background */}
                <rect width="1200" height="480" fill="url(#grid)" opacity="0.3" />
                
                {/* Simplified world map outline */}
                <motion.path
                  d={worldMapPath}
                  fill="url(#mapGradient)"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />

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
                        strokeWidth={hoveredDestination === destination.slug ? "4" : "3"}
                        strokeOpacity="0.8"
                        strokeLinecap="round"
                        filter="url(#glow)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.3, ease: "easeInOut" }}
                      />
                      
                      {/* Animated traveling dash */}
                      {!reducedMotion && (
                        <motion.path
                          d={pathData}
                          fill="none"
                          stroke={destination.color}
                          strokeWidth="4"
                          strokeDasharray="15 30"
                          strokeLinecap="round"
                          strokeOpacity="0.9"
                          animate={{
                            strokeDashoffset: [0, -45]
                          }}
                          transition={{
                            duration: 2.5,
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
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 1
                          }}
                        >
                          <circle
                            cx="0"
                            cy="0"
                            r="8"
                            fill={destination.color}
                            opacity="0.3"
                          />
                          <Plane
                            size={16}
                            className="text-foreground drop-shadow-lg"
                            style={{ transform: "translate(-8px, -8px)" }}
                          />
                        </motion.g>
                      )}
                    </g>
                  );
                })}

                {/* Destination markers */}
                {destinations.map((destination, index) => (
                  <g key={`marker-${destination.slug}`}>
                    {/* Pulsing ring on hover */}
                    {hoveredDestination === destination.slug && !reducedMotion && (
                      <motion.circle
                        cx={destination.coordinates.x}
                        cy={destination.coordinates.y}
                        r="20"
                        fill="none"
                        stroke={destination.color}
                        strokeWidth="2"
                        strokeOpacity="0.6"
                        animate={{
                          r: [15, 25, 15],
                          strokeOpacity: [0.8, 0.2, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    
                    <motion.circle
                      cx={destination.coordinates.x}
                      cy={destination.coordinates.y}
                      r="12"
                      fill={destination.color}
                      stroke="hsl(var(--background))"
                      strokeWidth="3"
                      className="cursor-pointer drop-shadow-lg"
                      filter="url(#glow)"
                      aria-label={`${destination.name} destination`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.5 + index * 0.2, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.3 }}
                      onMouseEnter={() => setHoveredDestination(destination.slug)}
                      onMouseLeave={() => setHoveredDestination(null)}  
                    />
                    
                    {/* Enhanced tooltip on hover */}
                    <AnimatePresence>
                      {hoveredDestination === destination.slug && (
                        <motion.g
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <rect
                            x={destination.coordinates.x - 65}
                            y={destination.coordinates.y - 70}
                            width="130"
                            height="50"
                            rx="12"
                            fill="hsl(var(--background))"
                            stroke="hsl(var(--border))"
                            strokeWidth="1"
                            className="drop-shadow-xl"
                            filter="url(#glow)"
                          />
                          <text
                            x={destination.coordinates.x}
                            y={destination.coordinates.y - 50}
                            textAnchor="middle"
                            className="text-sm font-semibold fill-current text-foreground"
                          >
                            {destination.name}
                          </text>
                          <text
                            x={destination.coordinates.x}
                            y={destination.coordinates.y - 32}
                            textAnchor="middle"
                            className="text-xs fill-current text-muted-foreground"
                          >
                            {destination.stats.placements} placements • {destination.stats.success} success
                          </text>
                        </motion.g>
                      )}  
                    </AnimatePresence>
                  </g>
                ))}

                {/* Sri Lanka origin marker with enhanced styling */}
                <g>
                  {!reducedMotion && (
                    <motion.circle
                      cx={sriLankaCoords.x}
                      cy={sriLankaCoords.y}
                      r="30"
                      fill="hsl(var(--primary) / 0.2)"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.1, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ willChange: "transform, opacity" }}
                    />
                  )}
                  
                  <motion.circle
                    cx={sriLankaCoords.x}
                    cy={sriLankaCoords.y}
                    r="15"
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--background))"
                    strokeWidth="4"
                    className="drop-shadow-lg"
                    filter="url(#glow)"
                    aria-label="Sri Lanka origin point"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 300 }}
                  />
                  
                  <motion.text
                    x={sriLankaCoords.x}
                    y={sriLankaCoords.y + 35}
                    textAnchor="middle"
                    className="text-sm font-bold fill-current text-foreground drop-shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  >
                    🇱🇰 Sri Lanka
                  </motion.text>
                </g>

                {/* Modern legend */}
                <motion.g 
                  className="legend"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.5 }}
                >
                  <rect
                    x="30"
                    y="30" 
                    width="200"
                    height="140"
                    rx="16"
                    fill="hsl(var(--background) / 0.95)"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                    className="drop-shadow-lg"
                    filter="url(#glow)"
                  />
                  <text
                    x="130"
                    y="55"
                    textAnchor="middle"
                    className="text-base font-bold fill-current text-foreground"
                  >
                    Deployment Routes
                  </text>
                  
                  {destinations.map((destination, index) => (
                    <g key={`legend-${destination.slug}`}>
                      <circle
                        cx="50"
                        cy={80 + index * 25}
                        r="6"
                        fill={destination.color}
                        filter="url(#glow)"
                      />
                      <text
                        x="70"
                        y={86 + index * 25}
                        className="text-sm fill-current text-foreground cursor-pointer hover:fill-primary transition-colors"
                        role="button"
                        tabIndex={0}
                        onMouseEnter={() => setHoveredDestination(destination.slug)}
                        onMouseLeave={() => setHoveredDestination(null)}
                        onFocus={() => setHoveredDestination(destination.slug)}
                        onBlur={() => setHoveredDestination(null)}
                      >
                        {destination.name}
                      </text>
                      <text
                        x="180"
                        y={86 + index * 25}
                        className="text-xs fill-current text-muted-foreground"
                        textAnchor="middle"
                      >
                        {destination.stats.success}
                      </text>
                    </g>
                  ))}
                </motion.g>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Destination Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.15, 
                ease: "easeOut" 
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              onMouseEnter={() => setHoveredDestination(destination.slug)}
              onMouseLeave={() => setHoveredDestination(null)}
            >
              <Card className="h-full border-0 shadow-elegant bg-gradient-to-br from-card to-muted/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative">
                  <motion.div 
                    className="flex items-center gap-4 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.0 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="text-4xl p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-border/50"
                      initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 1.2 + index * 0.15,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {destination.flag}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.3 + index * 0.15 
                      }}
                      viewport={{ once: true }}
                    >
                      <CardTitle className="text-2xl font-bold">{destination.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{destination.regulation}</p>
                    </motion.div>
                  </motion.div>

                  {/* Stats row */}
                  <motion.div
                    className="flex items-center gap-4 p-3 bg-muted/30 rounded-xl border border-border/30"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.4 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-primary" />
                      <span className="text-sm font-semibold">{destination.stats.placements}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp size={16} className="text-secondary" />
                      <span className="text-sm font-semibold">{destination.stats.success}</span>
                    </div>
                  </motion.div>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.5 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} className="text-muted-foreground" />
                      <p className="font-medium text-sm text-muted-foreground">Sample Roles:</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {destination.roles.map((role, roleIndex) => (
                        <span 
                          key={roleIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-2 text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.6 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    <Clock size={16} />
                    <span className="text-sm">Avg deployment: <strong>{destination.deploymentTime}</strong></span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 1.7 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-primary-foreground font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      <CheckCircle size={18} className="mr-2" />
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