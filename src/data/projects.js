export const projects = [
    {
        id: 1,
        title: 'AutoDocLM',
        description:
            'Generates structured documentation from a GitHub repository by analyzing source code and dependency graphs. Produces a documentation website with architecture overview, module descriptions, setup instructions, and diagrams.',
        tech: ['Python', 'Ollama', 'Qwen', 'ChromaDB', 'NetworkX', 'MkDocs'],
        category: 'ml',
        github: 'https://github.com/KaushalrajPuwar/AutoDocLM',
        demo: null,
        status: 'completed'
    },
    {
        id: 2,
        title: 'Signal Cluster Classification',
        description:
            'This environment simulates a High-Fidelity Steam Turbine Cycle. An LLM agent acts as the Lead Plant Controller, managing the balance between fuel input and cooling flux. A single mistake - such as failing to anticipate thermal inertia during a load spike—can lead to Steam Vessel Over-pressurisation or Catastrophic Core Failure, resulting in a grid-wide blackout.',
        tech: ['OpenEnv', 'HuggingFace', 'Reinforcement Learning'],
        category: 'ml',
        github: 'https://github.com/KaushalrajPuwar/Thermal-Plant-Control-Env',
        demo: 'https://huggingface.co/spaces/kaushalrajpuwar/thermal-plant-control',
        status: 'completed'
    },
    {
        id: 3,
        title: 'Adaptive Bridge',
        description:
            'Adaptive Bridge is a ROS 2 middleware-level proxy package that mitigates the slow subscriber / backpressure coupling problem by decoupling critical and non-critical subscriber paths, preventing a degraded subscriber (e.g., remote RViz over Wi-Fi) from choking the publisher or affecting safety-critical consumers.',
        tech: ['ROS 2', 'Python', 'Nvidia Issac Sim'],
        category: 'systems',
        github: 'https://github.com/KaushalrajPuwar/adaptive-bridge',
        demo: null,
        status: 'in-progress',
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description:
            'This very website - a single-page portfolio built with React and Tailwind CSS, featuring interactive star animations, scroll-driven reveals, and an editorial design language.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        category: 'web',
        github: 'https://github.com/KaushalrajPuwar/portfolio',
        demo: '#',
        status: 'completed',
    },
    {
        id: 5,
        title: 'Hospital Site Suitability Analysis',
        description:
            'A GIS-based analysis that identifies optimal hospital locations in Hyderabad using travel-time accessibility and population density. Integrates OpenStreetMap, WorldPop data, and OpenRouteService routing to highlight underserved areas.',
        tech: ['QGIS', 'Python', 'OpenRouteService', 'WorldPop', 'OpenStreetMap'],
        category: 'systems',
        github: 'https://github.com/KaushalrajPuwar/Hospital-Site-Suitability-Hyderabad',
        demo: null,
        status: 'completed'
    },
];

export const categories = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'ml', label: 'AI / ML' },
    { key: 'systems', label: 'Systems' },
];
