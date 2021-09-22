class Task {
  private id: number;
  private taskStatus: any;
  private name: string;
  private dueDate: Date;
  private postponeCount: number;

  public getId(): number {
    return this.id;
  }

  public setId(newId: number): void {
    this.id = newId;
  }

  // 他のも同様
}
