class Task {
  private id: number;
  private taskStatus: TaskStatus;
  private name: string;
  private dueDate: Date;
  private postponeCount: number;

  public getId(): number {
    return this.id;
  }

  public setId(newId: number): void {
    this.id = newId;
  }

  public getTaskStatus(): TaskStatus {
    return this.taskStatus;
  }

  public setTaskStatus(taskStatus: TaskStatus): void {
    this.taskStatus = taskStatus;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getDueDate(): Date {
    return this.dueDate;
  }

  public setDueDate(dueDate: Date): void {
    this.dueDate = dueDate;
  }

  public getPostponeCount(): number {
    return this.postponeCount;
  }

  public setPostponeCount(postponeCount: number): void {
    this.postponeCount = postponeCount;
  }
}

export enum TaskStatus {
  UNDONE,
  DOING,
  DONE,
}

export default Task;
