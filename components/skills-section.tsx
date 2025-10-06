import type { HTMLAttributes } from "react"
import { Code, Database, Globe, Lock, Server, Smartphone } from "lucide-react"

import { cn } from "@/lib/utils"

interface SkillsSectionProps extends HTMLAttributes<HTMLElement> {}

export default function SkillsSection({ className, ...props }: SkillsSectionProps) {
  return (
    <section className={cn("py-12", className)} {...props}>
      <h2 className="section-heading">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Frontend Development */}
        <div className="pro-card p-6 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Frontend Development</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Creating responsive and interactive user interfaces with modern frameworks and libraries.
          </p>
          <div className="space-y-3">
            <SkillBar name="React / Next.js" percentage={95} />
            <SkillBar name="TypeScript" percentage={90} />
            <SkillBar name="HTML5 / CSS3" percentage={95} />
            <SkillBar name="Tailwind CSS" percentage={90} />
          </div>
        </div>

        {/* Backend Development */}
        <div className="pro-card p-6 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Backend Development</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Building robust server-side applications and APIs with scalable architectures.
          </p>
          <div className="space-y-3">
            <SkillBar name="Node.js" percentage={90} />
            <SkillBar name="Express.js" percentage={85} />
            <SkillBar name="Python" percentage={80} />
            <SkillBar name="PHP" percentage={75} />
          </div>
        </div>

        {/* Database */}
        <div className="pro-card p-6 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Database</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Designing and optimizing database structures for efficient data management.
          </p>
          <div className="space-y-3">
            <SkillBar name="MongoDB" percentage={90} />
            <SkillBar name="MySQL" percentage={85} />
            <SkillBar name="PostgreSQL" percentage={80} />
            <SkillBar name="Firebase" percentage={85} />
          </div>
        </div>

        {/* Mobile Development */}
        <div className="pro-card p-6 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Mobile Development</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Creating cross-platform mobile applications with modern frameworks.
          </p>
          <div className="space-y-3">
            <SkillBar name="React Native" percentage={85} />
            <SkillBar name="Flutter" percentage={70} />
            <SkillBar name="Ionic" percentage={75} />
            <SkillBar name="Progressive Web Apps" percentage={90} />
          </div>
        </div>

        {/* DevOps & Cloud */}
        <div className="pro-card p-6 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">DevOps & Cloud</h3>
          </div>
          <p className="text-muted-foreground mb-4">Implementing CI/CD pipelines and managing cloud infrastructure.</p>
          <div className="space-y-3">
            <SkillBar name="AWS" percentage={85} />
            <SkillBar name="Docker" percentage={80} />
            <SkillBar name="GitHub Actions" percentage={90} />
            <SkillBar name="Vercel / Netlify" percentage={95} />
          </div>
        </div>

        {/* Cybersecurity */}
        <div className="pro-card p-6 hover-lift">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Cybersecurity</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Implementing security best practices and protecting applications from threats.
          </p>
          <div className="space-y-3">
            <SkillBar name="Web Security" percentage={90} />
            <SkillBar name="Penetration Testing" percentage={80} />
            <SkillBar name="Security Auditing" percentage={85} />
            <SkillBar name="Authentication Systems" percentage={95} />
          </div>
        </div>
      </div>
    </section>
  )
}

interface SkillBarProps {
  name: string
  percentage: number
}

function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary/50 dark:bg-secondary/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#D4AF37] to-[#B87333] rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}
