import { randomUUID } from "crypto";
import { LessonsRepository, CreateLessonData } from "../../repositories/LessonsRepository";
import { Lesson } from "@prisma/client";

export class inMemoryLessonsRepository implements LessonsRepository{
 public lessons: Lesson[]=[];
 
  async create(data: CreateLessonData): Promise<void> {
      this.lessons.push({
        id:randomUUID(),
        description: data.description ?? null,
        title:data.title
      });
  }
}