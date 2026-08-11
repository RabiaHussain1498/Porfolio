import ProjectCard from './ProjectCard'
import wesadImg from './assets/wesad.jpg'

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <ProjectCard
        title="Tasks API"
        description="A CRUD API for user-owned notes, with JWT authentication and PostgreSQL."
        technologies={["Python", "FastAPI", "PostgreSQL", "Docker"]}
        link="https://github.com/RabiaHussain1498/Tasks_API"
        imageAlt="Tasks API architecture diagram"
      />

      <ProjectCard
        title="Stress Detection using WESAD"
        description="Multimodal sensor-based classification of stress vs non-stress states using the WESAD dataset, combining physiological signals like EDA, ECG, and temperature."
        technologies={["Python", "Machine Learning", "Signal Processing", "Scikit-learn"]}
        link="https://github.com/RabiaHussain1498/Tasks API"
        image={wesadImg}
        imageAlt="Stress classification signal plot from WESAD dataset"
      />

      <ProjectCard
        title="Portfolio Site"
        description="A personal portfolio built with React, showcasing my projects and skills."
        technologies={["React", "Vite", "JSX"]}
        link="https://github.com/RabiaHussain1498/Porfolio"
      />
    </section>
  );
}

export default Projects;