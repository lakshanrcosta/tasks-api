import { Injectable } from '@nestjs/common';
import { ITask, TaskStatus } from './task.model';
import { CreateTaskDto } from './create-task.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: ITask[] = [];

  public findAll(): ITask[] {
    return this.tasks;
  }

  public findOne(id: string): ITask | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  public createTask(createTaskDto: CreateTaskDto): ITask {
    const newTask: ITask = {
      id: uuidv4(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: createTaskDto.status || TaskStatus.OPEN,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  public updateTask(id: string, status: TaskStatus): ITask | undefined {
    const task = this.findOne(id);
    if (task) {
      task.status = status;
    }
    return task;
  }

  public deleteTask(id: string): boolean {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      return true;
    }
    return false;
  }
}
