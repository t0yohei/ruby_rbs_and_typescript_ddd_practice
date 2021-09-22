import Task, { TaskStatus } from "./Task";

class TaskCreateUseCase {
  private taskRepository: TaskRepository;

  public createTask(name: string, dueDate: Date): void {
    if (name == null || dueDate == null) {
      throw new Error("必須項目が設定されていません");
    }
    const task: Task = new Task();
    task.setTaskStatus(TaskStatus.UNDONE); // ①
    task.setName(name);
    task.setDueDate(dueDate);
    task.setPostponeCount(0); // ②
    taskRepository.save(task);
  }
}
