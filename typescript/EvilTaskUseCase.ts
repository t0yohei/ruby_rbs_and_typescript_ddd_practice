import Task, { TaskStatus } from "./Task";

class EvilTaskUseCase {
  private taskRepository: TaskRepository;

  public createDoneTask(name: string, dueDate: Date): void {
    const task: Task = new Task();
    task.setTaskStatus(TaskStatus.DONE); // × 完了状態でタスク生成
    task.setPostponeCount(-1); // × カウントがまさかのマイナス
    taskRepository.save(task);
  }

  public changeTask(
    taskId: number,
    dueDate: Date,
    taskStatus: TaskStatus
  ): void {
    const task: Task = taskRepository.findByID(taskId);
    task.setDueDate(dueDate); // × 勝手に期日を入力値で設定、延期回数も無視
    task.setTaskStatus(taskStatus); // × タスクを未完了に戻せてしまう
    taskRepository.save(task);
  }
}
