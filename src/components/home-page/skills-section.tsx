import { skills } from "@/config/skills";
import type { Skills } from "@/config/skills";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="flex gap-1.5 flex-wrap">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center">
            <Badge variant="outline" className="py-1 hover:bg-secondary/80">
              <skill.icon className="w-5 h-5 mr-1.5" />
              {skill.name}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
