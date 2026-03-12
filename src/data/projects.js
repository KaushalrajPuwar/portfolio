export const projects = [
  {
    id: 1,
    title: 'Neural Style Transfer',
    description:
      'A deep learning pipeline that reimagines photographs in the style of famous paintings. Uses convolutional neural networks to separate and recombine content and style, producing artwork-quality images from ordinary photos.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'NumPy'],
    category: 'ai',
    github: '#',
    demo: '#',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Campus Connect',
    description:
      'A collaborative platform built for IIIT Bangalore students to share notes, form study groups, and coordinate on assignments. Real-time messaging, resource sharing, and group management in one place.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'web',
    github: '#',
    demo: '#',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Shell from Scratch',
    description:
      'A custom Unix shell written in C that supports piping, redirection, job control, and built-in commands. Built to deeply understand how operating systems manage processes and I/O.',
    tech: ['C', 'Linux', 'Systems Programming'],
    category: 'systems',
    github: '#',
    demo: null,
    status: 'completed',
  },
  {
    id: 4,
    title: 'Distributed Key-Value Store',
    description:
      'A fault-tolerant distributed storage system implementing consistent hashing and replication. Handles node failures gracefully while maintaining data availability.',
    tech: ['Java', 'gRPC', 'Docker', 'Distributed Systems'],
    category: 'systems',
    github: '#',
    demo: null,
    status: 'completed',
  },
  {
    id: 5,
    title: 'Sentiment Analysis Engine',
    description:
      'An NLP pipeline that classifies text sentiment from social media posts, reviews, and articles. Fine-tuned transformer models achieve state-of-the-art accuracy on benchmark datasets.',
    tech: ['Python', 'PyTorch', 'HuggingFace', 'FastAPI'],
    category: 'ai',
    github: '#',
    demo: '#',
    status: 'completed',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description:
      'This very website — a single-page portfolio built with React and Tailwind CSS, featuring interactive particle animations, scroll-driven reveals, and an editorial design language.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Canvas API'],
    category: 'web',
    github: '#',
    demo: '#',
    status: 'completed',
  },
  {
    id: 7,
    title: 'Autonomous Drone Navigation',
    description:
      'Exploring reinforcement learning approaches to autonomous drone navigation in simulated environments. Currently training agents on obstacle avoidance and path optimization.',
    tech: ['Python', 'PyTorch', 'OpenAI Gym', 'ROS'],
    category: 'ai',
    github: '#',
    demo: null,
    status: 'in-progress',
  },
];

export const categories = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'systems', label: 'Systems' },
];
