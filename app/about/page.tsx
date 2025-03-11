import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function AboutPage() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Tailwind CSS", level: 95 },
    { name: "GraphQL", level: 70 },
  ]

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Lead frontend development for enterprise applications. Implemented modern React architecture and improved performance by 40%.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "2018 - 2021",
      description:
        "Developed responsive web applications using React and Redux. Collaborated with UX designers to implement pixel-perfect interfaces.",
    },
    {
      title: "Junior Web Developer",
      company: "WebCraft Studios",
      period: "2016 - 2018",
      description: "Built and maintained client websites. Worked with HTML, CSS, JavaScript, and jQuery.",
    },
  ]

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "State University",
      period: "2010 - 2014",
    },
  ]

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        <div className="col-span-1">
          <div className="sticky top-24">
            <div className="relative h-64 w-64 mx-auto overflow-hidden rounded-xl border-4 border-primary/20 mb-6">
              <Image
                src="/placeholder.svg?height=256&width=256"
                width={256}
                height={256}
                alt="John Doe"
                className="object-cover"
              />
            </div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-muted-foreground">Full Stack Developer</p>
            </div>
            <div className="flex justify-center mb-6">
              <Link href="/contact">
                <Button>Contact Me</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full stack developer with over 6 years of experience building web applications. I
                specialize in creating responsive, accessible, and performant web experiences using modern technologies.
              </p>
              <p>
                My journey in web development began during my university years, where I discovered my passion for
                creating digital solutions. Since then, I've worked with various companies and clients, helping them
                bring their ideas to life through code.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies.
                I'm always eager to learn and grow as a developer.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l border-muted-foreground/20 last:border-0 last:pb-0"
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="flex justify-between text-muted-foreground mb-2">
                    <span>{exp.company}</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l border-muted-foreground/20 last:border-0 last:pb-0"
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <div className="flex justify-between text-muted-foreground">
                    <span>{edu.institution}</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

