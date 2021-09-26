class Task {
  private id: number;
  private taskStatus: TaskStatus;
  private name: string;
  private dueDate: Date;
  private postponeCount: number;

  // コンストラクタ: 新規登録時の処理
  public constructor(name: string, dueDate: Date) {
    if (name == null || dueDate == null) {
      throw new Error("必須項目が設定されていません");
    }
    this.name = name;
    this.dueDate = dueDate;
    this.taskStatus = TaskStatus.UNDONE; // ①
    this.postponeCount = 0;
  }

  private static readonly POSTPONE_MAX_COUNT = 3; // ②

  // 延期時の処理
  public postpone(): void {
    // ③
    if (this.postponeCount >= Task.POSTPONE_MAX_COUNT) {
      throw new Error("最大延期回数を超過しています");
    }
    this.dueDate.getDate() + 1;
    this.postponeCount++;
  }

  // getter 群
  public getId(): number {
    return this.id;
  }

  public getTaskStatus(): TaskStatus {
    return this.taskStatus;
  }

  public getName(): string {
    return this.name;
  }

  public getDueDate(): Date {
    return this.dueDate;
  }

  public getPostponeCount(): number {
    return this.postponeCount;
  }
}

export enum TaskStatus {
  UNDONE,
  DOING,
  DONE,
}

export default Task;
