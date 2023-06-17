import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Baykar Technology",
    position: "Intern Software Engineer",
    time: "Present",
    location: "İstanbul",
    description:
      "I haven't started completely yet.",
    tech: [
      "C#",
      "Python",
      "Git",
      "GitHub",
      "C++",
      "OpenCV",
    ],
  },
  {
    title: "DOAL Games",
    position: "Unity 3D Game Developer",
    time: "2020 - 2022",
    location: "İstanbul",
    description:
      "I've developed 14 mobile hypercasual games until I quit. It was kinda fun.",
    tech: ["Unity", "C#", "HLSL", "Shader Graph", "C++"],
  },
];
