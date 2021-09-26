import Task from "./Task";

class TaskPostponeUseCase {
  private taskRepository: TaskRepository;

  public postponeTask(taskId: number): void {
    // 更新時のルール/制約に関する実装がなくなっている
    const task: Task = taskRepository.findByID(taskId);
    task.postpone();
    taskRepository.save(task);
  }
}
