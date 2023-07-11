import { CreateLessonData, LessonsRepository } from "../LessonsRepository";
import {prisma} from '../../prisma';

export class PrismaLessonsRepository implements LessonsRepository{
  async create(data: CreateLessonData): Promise<void> {
    await prisma.lesson.create({
      data
     });
  }
}