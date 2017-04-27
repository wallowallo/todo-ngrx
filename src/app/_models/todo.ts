export class Todo {
  constructor(
  public title: string,
  public description: string,
  public isEdit: boolean,
  public id: number,
  public completed: boolean,
  public dateAdded: any) { }
}
