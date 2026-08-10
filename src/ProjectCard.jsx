
function ProjectCard({ title, description, technologies, link, image, imageAlt }) {
  return (
    <article>
      {image && <img src={image} alt={imageAlt || ''} width="300" />}
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View {title} on GitHub
      </a>
    </article>
  );
}

export default ProjectCard;