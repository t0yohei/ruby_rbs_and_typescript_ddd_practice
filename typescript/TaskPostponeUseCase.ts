import Task from "./Task";

class TaskPostponeUseCase {
  private taskRepository: TaskRepository;
  private readonly POSTPONE_MAX_COUNT: number = 3; // ③

  public postponeTask(taskId: number): void {
    const task: Task = taskRepository.findByID(taskId);
    if (task.getPostponeCount() >= this.POSTPONE_MAX_COUNT) {
      // ④
      throw new Error("最大延期回数を超過しています");
    }
    task.setDueDate(new Date(task.getDueDate().getDate() + 1)); // ⑥
    task.setPostponeCount(task.getPostponeCount() + 1); // ⑤
    taskRepository.save(task);
  }
}
