import { inMemoryLessonsRepository } from "../test/repositories/inMemoryLessonsRepository";
import { CreateLesson } from "./CreateLesson"

describe('Create Lesson Service',()=>{
  it('should be able to create a new Lesson',async()=>{
    const inMemoryLessonRepository = new inMemoryLessonsRepository();
    const createLesson = new CreateLesson(inMemoryLessonRepository);
    await expect(createLesson.execute({title:'Nova aula'})).resolves.not.toThrow();
    expect(inMemoryLessonRepository.lessons).toEqual(
      expect.arrayContaining([
          expect.objectContaining({
              title:'Nova aula',
          })
      ]));
  })

  it('should NOT be able to create a new Lesson with invalid title',async()=>{
    const inMemoryLessonRepository = new inMemoryLessonsRepository();
    const createLesson = new CreateLesson(inMemoryLessonRepository);
    await expect(createLesson.execute({title:''})).rejects.toThrow();
    expect(inMemoryLessonRepository.lessons).toEqual([]);
  })
});
