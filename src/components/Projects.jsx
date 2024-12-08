"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: "/public/photo2.png",
      title: "Air Jordan 4 Retro",
      description: "The Air Jordan 4 Retro Reimagined Bred will release soon.",
      price: "$100",
    },
    {
      id: 2,
      image: "/public/photo1.png",
      title: "Another Cool Sneaker",
      description: "Another detailed description goes here for this sneaker.",
      price: "$120",
    },
    {
      id: 3,
      image: "/public/photo1.png",
      title: "Another Cool Sneaker",
      description: "Another detailed description goes here for this sneaker.",
      price: "$120",
    },
    {
      id: 4,
      image: "/public/photo1.png",
      title: "Another Cool Sneaker",
      description: "Another detailed description goes here for this sneaker.",
      price: "$120",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <BackgroundGradient
            key={project.id}
            className="w-full h-full rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900"
          >
            <div
              key={project.id}
              className="w-full max-w-sm mx-auto bg-white dark:bg-zinc-900 shadow-md rounded-lg p-6"
            >
              {/* Project Image */}
              <div className="mb-4">
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>

              {/* Project Title */}
              <p className="text-lg font-semibold text-black dark:text-neutral-200 mb-2">
                {project.title}
              </p>

              {/* Project Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {project.description}
              </p>

              {/* Explore Button */}
              <div className="flex justify-end">
                <Link href="/courses">
                  <Button
                    borderRadius="1.75rem"
                    className="px-4 py-2 bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800"
                  >
                    Explore courses
                  </Button>
                </Link>
              </div>
            </div>
          </BackgroundGradient>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/projects">
          <Button
            borderRadius="1.75rem"
            className="px-4 py-2 bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800"
          >
            View All Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}
