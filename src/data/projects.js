export const projects = [
    {
        id: 1,
        title: 'AutoDocLM',
        description:
            'Generates structured documentation from a GitHub repository by analyzing source code and dependency graphs. Produces a documentation website with architecture overview, module descriptions, setup instructions, and diagrams.',
        tech: ['Python', 'DeepSeek-Coder-6.7B', 'Qwen2.5-7B', 'Ollama', 'FAISS', 'Sentence Transformers', 'MkDocs'],
        category: 'ml',
        github: 'https://github.com/KaushalrajPuwar/AutoDocLM',
        demo: null,
        status: 'in-progress'
    },
    {
        id: 2,
        title: 'Signal Cluster Classification',
        description:
            'SignalCluster is a multiclass classification project using synthetic 2D signal data. Models predict a sample’s cluster category from signal strength and response level, with performance evaluated using Macro F1 Score.',
        tech: ['Python', 'Jupyter Notebook'],
        category: 'ml',
        github: 'https://github.com/KaushalrajPuwar/Signal-Cluster-Classification',
        demo: 'https://www.kaggle.com/competitions/signal-cluster-classification-dataset/submissions',
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
    {
        id: 6,
        title: 'Grid Hero',
        description:
            'Grid Hero is a strategic pathfinding CLI game where players collect coins across a grid while evading an enemy that dynamically calculates the shortest path to capture them. Coins unlock three progressively harder levels and a final boss battle.',
        tech: ['C++', 'Java', 'C'],
        category: 'systems',
        github: 'https://github.com/KaushalrajPuwar/GridHero',
        demo: null,
        status: 'completed',
    },
];

export const categories = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'ml', label: 'AI / ML' },
    { key: 'systems', label: 'Systems' },
];
