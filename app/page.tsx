"use client";

import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const skills = {
    cloud: ["AWS", "Azure", "GCP", "Kubernetes", "Docker"],
    cicd: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"],
    infrastructure: ["Terraform", "Ansible", "Pulumi", "CloudFormation"],
    monitoring: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
    languages: ["Python", "Bash", "Go", "JavaScript/TypeScript"],
  };

  const projects = [
    {
      title: "Cloud-Native CI/CD Pipeline",
      description: "Implemented a fully automated CI/CD pipeline using GitHub Actions, ArgoCD, and Kubernetes, reducing deployment time by 70%.",
      tags: ["Kubernetes", "GitHub Actions", "ArgoCD", "Terraform"],
    },
    {
      title: "Infrastructure as Code Framework",
      description: "Developed a custom IaC framework using Terraform modules, implementing best practices and security controls.",
      tags: ["Terraform", "AWS", "Python", "Security"],
    },
    {
      title: "Monitoring Solution",
      description: "Set up comprehensive monitoring using Prometheus and Grafana, with custom alerting and dashboards.",
      tags: ["Prometheus", "Grafana", "Kubernetes", "Alerting"],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <Terminal className="h-20 w-20 mb-6 text-primary" />
          <h1 className="text-4xl font-bold mb-4">John DevOps</h1>
          <h2 className="text-2xl text-muted-foreground mb-6">Senior DevOps Engineer</h2>
          <p className="max-w-2xl text-muted-foreground mb-8">
            Passionate about automating everything and building reliable, scalable infrastructure.
            Specializing in cloud-native technologies, CI/CD, and infrastructure as code.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="capitalize">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <Tabs defaultValue="current" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="previous1">Previous</TabsTrigger>
            <TabsTrigger value="previous2">Previous</TabsTrigger>
          </TabsList>
          <TabsContent value="current">
            <Card>
              <CardHeader>
                <CardTitle>Senior DevOps Engineer at TechCorp</CardTitle>
                <p className="text-muted-foreground">2021 - Present</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Led the migration of legacy applications to a cloud-native architecture</li>
                  <li>Implemented GitOps practices using ArgoCD and Flux</li>
                  <li>Reduced infrastructure costs by 40% through optimization</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="previous1">
            <Card>
              <CardHeader>
                <CardTitle>DevOps Engineer at CloudScale</CardTitle>
                <p className="text-muted-foreground">2019 - 2021</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developed and maintained CI/CD pipelines for microservices</li>
                  <li>Implemented infrastructure as code using Terraform</li>
                  <li>Set up monitoring and alerting systems</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="previous2">
            <Card>
              <CardHeader>
                <CardTitle>Systems Administrator at DataTech</CardTitle>
                <p className="text-muted-foreground">2017 - 2019</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Managed on-premises infrastructure and cloud services</li>
                  <li>Automated routine tasks using Python and Bash</li>
                  <li>Improved system uptime from 95% to 99.9%</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-muted-foreground mb-8">
            I'm always interested in hearing about new opportunities and challenges in the DevOps space.
          </p>
          <Button className="w-full sm:w-auto">
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>
        </div>
      </section>
    </main>
  );
}