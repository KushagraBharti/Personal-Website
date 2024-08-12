import { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';

interface Project {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await fetchProjects();
      setProjects(projects);
    };

    getProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project: Project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
