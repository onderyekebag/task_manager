import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {TaskGroupModel} from "../model/task-group.model";

@Injectable({providedIn: 'root'})
export class TaskGroupService {

  path = `${environment.api}/task-group`

  constructor(private http: HttpClient) {}

  getGroups() {
    return this.http.get<TaskGroupModel[]>(`${this.path}`);
  }

  createNewGroup(dto: TaskGroupModel) {
    return this.http.post(`${this.path}`, dto);
  }

  updateGroup(dto: TaskGroupModel) {
    return this.http.put(`${this.path}/${dto.id}`, dto);
  }

  deleteGroup(dto: TaskGroupModel) {
    return this.http.delete(`${this.path}/${dto.id}`);
  }

}
