import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {TaskModel} from "../model/task-group.model";

@Injectable({providedIn: 'root'})
export class TasksService {

  path = `${environment.api}/tasks`

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<TaskModel[]>(`${this.path}`);
  }

  createNewTask(dto: TaskModel) {
    return this.http.post<TaskModel>(`${this.path}`, dto);
  }

  updateTask(dto: TaskModel) {
    return this.http.put(`${this.path}/${dto.id}`, dto);
  }

  deleteTask(taskId: string) {
    return this.http.delete(`${this.path}/${taskId}`);
  }

}
