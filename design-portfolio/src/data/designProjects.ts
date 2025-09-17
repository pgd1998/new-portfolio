import { DesignProject } from '../types/designProject';

export const designProjects: DesignProject[] = [
  {
    id: 'impossible-geometry-explorer',
    title: 'Impossible Geometry Explorer',
    subtitle: 'Where Mathematics Meets Interactive Design',
    year: '2025',
    category: '3D Web Experience',
    thumbnail: '/projects/geometry-thumbnail.png',
    previewType: 'iframe',
    previewUrl: 'https://geometry-explorer.vercel.app/',
    liveUrl: 'https://geometry-explorer.vercel.app/',
    githubUrl: 'https://github.com/poorvithgowda/impossible-geometry-explorer',
    challenge: 'Visualize mathematically impossible objects in an educational yet beautiful interface that makes complex topology accessible to everyone.',
    solution: 'Created an interactive 3D visualization platform that transforms abstract mathematical concepts into tangible, explorable experiences using Three.js and custom shaders.',
    process: [
      'Mathematical research and parametric equation implementation',
      'User experience design focused on educational flow',
      '3D rendering optimization with Three.js and custom materials',
      'Minimalist UI design that highlights the geometry',
      'Interactive controls with progressive disclosure of information',
      'Performance optimization for smooth 60fps rendering'
    ],
    techStack: ['React', 'Three.js', 'TypeScript', 'React Three Fiber', 'Custom GLSL Shaders'],
    designTools: ['Figma', 'Blender', 'Adobe After Effects'],
    impact: 'Transforms complex mathematical concepts into accessible visual experiences, making topology and impossible geometry understandable through interaction.',
    designDecisions: {
      'Color Palette': 'Monochromatic base with strategic accent colors to focus attention on 3D geometry without visual noise',
      'Typography': 'Clean, scientific aesthetic with mathematical symbols that complement rather than compete with 3D objects',
      'Interaction Design': 'Intuitive orbit controls with progressive disclosure - users discover information naturally through exploration',
      'Performance': 'Optimized rendering pipeline ensuring smooth interaction across devices while maintaining visual fidelity'
    },
    featured: true,
    metrics: [
      { label: 'Performance Score', value: '98/100' },
      { label: 'Render FPS', value: '60fps' },
      { label: 'Load Time', value: '<2s' }
    ]
  },
  {
    id: 'f1-intelligence',
    title: 'F1 Intelligence',
    subtitle: 'Real-time Racing Analytics Dashboard',
    year: '2025',
    category: 'Data Visualization & UX',
    thumbnail: '/projects/f1-thumbnail.png',
    previewType: 'iframe',
    previewUrl: 'https://www.f1intelligence.org/',
    liveUrl: 'https://www.f1intelligence.org/',
    challenge: 'Present complex telemetry data in an intuitive, real-time interface that serves both casual fans and racing professionals.',
    solution: 'Designed a comprehensive analytics dashboard with multi-layered data visualization, real-time updates, and intelligent information hierarchy.',
    process: [
      'User research with F1 fans and racing professionals',
      'Information architecture for complex telemetry data',
      'Real-time data visualization design',
      'Racing-inspired visual design system',
      'Mobile-responsive dashboard optimization',
      'Performance testing with live data feeds'
    ],
    techStack: ['TypeScript', 'React', 'FastAPI', 'Redis', 'Supabase', 'Chart.js'],
    designTools: ['Figma', 'Adobe Illustrator', 'Principle'],
    impact: 'Delivers real-time F1 insights with optimized data loading, serving racing analytics to enthusiasts worldwide.',
    designDecisions: {
      'Information Hierarchy': 'Layered data presentation allowing users to drill down from race overview to detailed telemetry',
      'Visual Language': 'Racing-inspired UI elements with speed-focused interactions and motorsport color schemes',
      'Data Visualization': 'Custom charts optimized for telemetry data with real-time updates and smooth animations',
      'Mobile Experience': 'Responsive design ensuring data accessibility on all devices without compromising functionality'
    },
    featured: true,
    metrics: [
      { label: 'Data Processing', value: '10k+ points/sec' },
      { label: 'User Engagement', value: '+150% time on site' },
      { label: 'Mobile Users', value: '65%' }
    ]
  },
  {
    id: 'rephrame-platform',
    title: 'Rephrame',
    subtitle: 'Sustainable Building Assessment Tool',
    year: '2024',
    category: 'Enterprise UX Design',
    thumbnail: '/projects/rephrame-thumbnail.png',
    previewType: 'iframe',
    previewUrl: 'https://rephrame.com',
    liveUrl: 'https://rephrame.com',
    challenge: 'Simplify complex environmental impact calculations for architects and building designers while maintaining scientific accuracy.',
    solution: 'Developed an intuitive assessment platform with progressive disclosure, interactive visualizations, and comprehensive reporting tools.',
    process: [
      'Stakeholder interviews with architects and sustainability consultants',
      'Complex data workflow mapping and simplification',
      'Design system creation for data-heavy interfaces',
      'Accessibility compliance for professional users',
      'Chart and visualization design for environmental data',
      'Usability testing with industry professionals'
    ],
    techStack: ['JavaScript', 'Flask', 'Python', 'Plotly Dash', 'Tailwind CSS'],
    designTools: ['Figma', 'Adobe Creative Suite', 'Miro'],
    impact: 'Improved assessment efficiency by 50% while making sustainable design practices more accessible to building professionals.',
    designDecisions: {
      'Progressive Disclosure': 'Complex calculations hidden behind intuitive interfaces with optional detailed views for power users',
      'Data Visualization': 'Environmental impact charts designed for clarity and actionable insights',
      'Accessibility': 'WCAG 2.1 AA compliance ensuring usability for diverse professional users',
      'Workflow Design': 'Streamlined assessment process reducing time from days to hours'
    },
    featured: true,
    metrics: [
      { label: 'Efficiency Improvement', value: '50%' },
      { label: 'User Satisfaction', value: '4.8/5' },
      { label: 'Accessibility Score', value: 'AA Compliant' }
    ]
  },
  {
    id: 'liquid-metal-shifter',
    title: 'Liquid Metal Shifter',
    subtitle: 'Interactive Fluid Dynamics Visualization',
    year: '2025',
    category: '3D Web Experience',
    thumbnail: '/projects/liquid-metal-thumbnail.png',
    previewType: 'iframe',
    previewUrl: 'https://liquid-metal-shifter.vercel.app/',
    liveUrl: 'https://liquid-metal-shifter.vercel.app/',
    challenge: 'Create an immersive 3D experience that simulates liquid metal behavior with realistic physics and beautiful visual effects.',
    solution: 'Developed an interactive WebGL application using advanced shaders and physics simulation to create mesmerizing liquid metal effects that respond to user interaction.',
    process: [
      'Research into fluid dynamics and metal rendering techniques',
      'Custom GLSL shader development for realistic metal appearance',
      'Physics simulation implementation for natural movement',
      'Interactive design allowing user manipulation',
      'Performance optimization for smooth real-time rendering',
      'Cross-device compatibility testing'
    ],
    techStack: ['Three.js', 'WebGL', 'GLSL Shaders', 'React', 'TypeScript'],
    designTools: ['Blender', 'Figma', 'Adobe After Effects'],
    impact: 'Demonstrates advanced 3D programming capabilities and creates an engaging interactive experience that showcases modern web graphics.',
    designDecisions: {
      'Visual Design': 'Metallic materials with realistic lighting and reflections for authentic liquid metal appearance',
      'Interaction Design': 'Intuitive mouse/touch controls that feel natural and responsive',
      'Performance': 'Optimized shaders and geometry for smooth 60fps rendering across devices',
      'User Experience': 'Progressive loading and graceful degradation for various hardware capabilities'
    },
    featured: true,
    metrics: [
      { label: 'Render FPS', value: '60fps' },
      { label: 'Load Time', value: '<3s' },
      { label: 'Compatibility', value: '95%' }
    ]
  },
  {
    id: 'ecosystem-renderer',
    title: 'Advanced Ecosystem Renderer',
    subtitle: 'Procedural Nature Visualization',
    year: '2025',
    category: '3D Web Experience',
    thumbnail: '/projects/ecosystem-thumbnail.png',
    previewType: 'iframe',
    previewUrl: 'https://ecosystem-renderer.vercel.app/',
    liveUrl: 'https://ecosystem-renderer.vercel.app/',
    challenge: 'Build a sophisticated 3D ecosystem with procedural generation, realistic lighting, and complex environmental interactions.',
    solution: 'Created an advanced rendering system with procedural terrain generation, dynamic weather systems, and realistic ecosystem simulation using cutting-edge web graphics technology.',
    process: [
      'Procedural generation algorithm design and implementation',
      'Advanced lighting system with dynamic shadows and atmospheric effects',
      'Ecosystem simulation with interactive environmental elements',
      'LOD (Level of Detail) optimization for complex scenes',
      'Weather and day/night cycle implementation',
      'Performance profiling and optimization for web deployment'
    ],
    techStack: ['Three.js', 'WebGL', 'GLSL Shaders', 'React', 'TypeScript', 'Noise.js'],
    designTools: ['Blender', 'World Creator', 'Figma'],
    impact: 'Pushes the boundaries of what\'s possible in web-based 3D graphics, demonstrating enterprise-level rendering capabilities in the browser.',
    designDecisions: {
      'Procedural Design': 'Algorithmic terrain and vegetation generation for infinite variety and realism',
      'Lighting System': 'Physically-based rendering with dynamic shadows and atmospheric scattering',
      'Performance Strategy': 'Multi-level LOD system and frustum culling for optimal performance',
      'User Controls': 'Intuitive camera controls and environment manipulation for exploration'
    },
    featured: true,
    metrics: [
      { label: 'Render Distance', value: '10km+' },
      { label: 'Objects Rendered', value: '50k+' },
      { label: 'Frame Rate', value: '60fps' }
    ]
  },
  {
    id: 'variation-management',
    title: 'Construction Variation Management',
    subtitle: 'Digital Process Optimization',
    year: '2025',
    category: 'Process & Form Design',
    thumbnail: '/projects/variation-thumbnail.png',
    previewType: 'iframe',
    previewUrl: 'https://variation-front-end.onrender.com/',
    liveUrl: 'https://variation-front-end.onrender.com/',
    challenge: 'Transform paper-based construction processes into efficient digital workflows while maintaining compliance and approval chains.',
    solution: 'Created a comprehensive digital platform with optimized form design, status tracking, and mobile-first approach for field workers.',
    process: [
      'Field research with construction teams and project managers',
      'Paper-to-digital workflow analysis and optimization',
      'Multi-step form UX design and testing',
      'Mobile-first responsive design for field use',
      'Status tracking and notification system design',
      'Integration with existing construction management tools'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Material UI', 'JWT'],
    designTools: ['Figma', 'Adobe XD', 'Miro'],
    impact: 'Reduced form processing time by 40% and eliminated paper-based bottlenecks in construction project management.',
    designDecisions: {
      'Form UX': 'Multi-step form design with smart validation and auto-save functionality',
      'Mobile-First': 'Touch-optimized interface for construction workers using tablets and phones on-site',
      'Status Tracking': 'Visual workflow indicators showing approval progress and bottlenecks',
      'Error Prevention': 'Smart validation and guided input to reduce submission errors'
    },
    featured: false,
    metrics: [
      { label: 'Processing Time', value: '-40%' },
      { label: 'Error Rate', value: '-60%' },
      { label: 'Mobile Usage', value: '80%' }
    ]
  },
  {
    id: 'optimized-canvas',
    title: 'High-Performance Canvas Renderer',
    subtitle: 'GPU-Accelerated Graphics with 60+ FPS',
    year: '2025',
    category: '3D Web Experience',
    thumbnail: '/projects/optimized-canvas-thumbnail.png',
    previewType: 'iframe',
    previewUrl: 'https://optimised-canvas.vercel.app/',
    liveUrl: 'https://optimised-canvas.vercel.app/',
    githubUrl: 'https://github.com/poorvithgowda/optimized-canvas',
    challenge: 'Create a high-performance canvas rendering system that maintains 60+ FPS while handling complex animations and thousands of objects simultaneously.',
    solution: 'Developed an optimized rendering pipeline using advanced canvas techniques, WebGL acceleration, and efficient memory management to achieve consistently smooth performance.',
    process: [
      'Performance profiling and bottleneck analysis',
      'Implementation of spatial indexing for efficient object culling',
      'GPU-accelerated rendering with WebGL integration',
      'Memory pooling and object recycling strategies',
      'Frame rate optimization and adaptive quality settings',
      'Comprehensive performance monitoring and metrics'
    ],
    techStack: ['Canvas API', 'WebGL', 'TypeScript', 'React', 'Performance API', 'Web Workers'],
    designTools: ['Chrome DevTools', 'WebGL Inspector', 'Figma'],
    impact: 'Achieves consistent 60+ FPS performance while rendering thousands of animated objects, demonstrating mastery of browser-based graphics optimization.',
    designDecisions: {
      'Rendering Pipeline': 'Multi-layered canvas approach with dirty rectangle optimization for minimal redraw overhead',
      'Memory Management': 'Object pooling and recycling to prevent garbage collection pauses',
      'Performance Monitoring': 'Real-time FPS counter and performance metrics for transparency',
      'Adaptive Quality': 'Dynamic quality adjustment based on device capabilities and current performance'
    },
    featured: true,
    metrics: [
      { label: 'Sustained FPS', value: '60+' },
      { label: 'Objects Rendered', value: '10k+' },
      { label: 'Memory Efficiency', value: '95%' }
    ]
  }
];

export const getFeaturedProjects = (): DesignProject[] => {
  return designProjects.filter(project => project.featured);
};

export const getProjectById = (id: string): DesignProject | undefined => {
  return designProjects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): DesignProject[] => {
  return designProjects.filter(project => project.category === category);
};