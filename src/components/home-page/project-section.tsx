import { FaLink } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { projects } from "@/config/projects";
import type { Project } from "@/config/projects";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Personal Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="border  rounded-lg flex flex-col justify-between">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold ">{project.name}</h3>
          <div className="flex space-x-2">
            <Link className="" target="_blank" href={project.live}>
              <FaLink className="w-5 h-5" />
            </Link>
            <Link className="" target="_blank" href={project.github}>
              <FiGithub className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 mb-4">{project.description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex">
          <FaCode className="w-5 h-5 mr-2" />
          <div className="flex flex-wrap gap-2">
            {project.stack.map((stack) => (
              <Badge key={stack} className="" variant="secondary">
                {stack}
              </Badge>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
