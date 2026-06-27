"use client";

import Image from "next/image";
import Container from "@/components/shared/Container";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import { getTeamPhoto, teamMembers } from "@/data/about";

export default function AboutTeam() {
  return (
    <section className="bg-white pb-14 md:pb-20 lg:pb-24">
      <Container>
        <AnimatedSection>
          <h2 className="max-w-md text-[1.75rem] font-extrabold leading-tight text-textDark md:text-4xl">
            Meet the team behind Rove10
          </h2>
        </AnimatedSection>

        <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-8">
          {teamMembers.map((member, index) => (
            <StaggerItem key={`${member.name}-${index}`}>
              <article>
                <div className="relative aspect-square overflow-hidden rounded-2xl md:rounded-[20px]">
                  <Image
                    src={getTeamPhoto(index)}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-textDark">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{member.role}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
