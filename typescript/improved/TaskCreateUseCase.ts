import Task from "./Task";

class TaskCreateUseCase {
  private taskRepository: TaskRepository;

  public createTask(name: string, dueDate: Date): void {
    // 生成時のルール/制約に関する実装がなくなっている
    const task: Task = new Task(name, dueDate);
    taskRepository.save(task);
  }
}
