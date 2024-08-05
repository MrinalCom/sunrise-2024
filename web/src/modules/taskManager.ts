import Task from "@/model/Task";
import { initialTasks } from "@/utils/TaskList";

let tasks: Task[] = [...initialTasks];

export function initializeTasks() {
    if (tasks.length === 0) {
        tasks.push(new Task(1, "Initial Task", "This is the initial task", "Employee 1", 1, false));
    }
}

export function getActiveTasks(): Task[] {
    const incompleteTasks = tasks.filter(task => !task.completed);
    if (incompleteTasks.length === 0) {
        return [];
    }

    const firstIncompleteGroup = Math.min(...incompleteTasks.map(task => task.group));
    return incompleteTasks.filter(task => task.group === firstIncompleteGroup);
}

export function getCompletedTasks(): Task[] {
    return tasks.filter(task => task.completed);
}

export function getAllTasks(): Task[] {
    return tasks;
}

export function completeTask(taskTitle: string): void {
    const task = tasks.find(task => task.title === taskTitle);
    if (!task) {
        console.error(`Task with title "${taskTitle}" not found.`);
        return;
    }

    if (task.completed) {
        console.warn(`Task with title "${taskTitle}" is already completed.`);
        return;
    }

    task.completed = true;

    const nextTaskInGroup = tasks.find(t => t.group === task.group && !t.completed);
    if (!nextTaskInGroup) {
        const nextGroupTasks = tasks.filter(t => t.group === task.group + 1 && !t.completed);
        if (nextGroupTasks.length > 0) {
            nextGroupTasks[0].completed = false;
        }
    }


}
export function createTask(title: string, description: string, persona: string, group: number): void {
    if (tasks.some(task => task.title === title)) {
        console.error(`Task with title "${title}" already exists.`);
        return;
    }
    const newTask = new Task(tasks.length + 1, title, description, persona, group);
    tasks.push(newTask);
}

export function updateTask(taskId: number, updatedTask: Partial<Omit<Task, 'id'>>): void {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        console.error(`Task with ID "${taskId}" not found.`);
        return;
    }
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
}

export function deleteTask(taskId: number): void {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== taskId);
    if (tasks.length === initialLength) {
        console.error(`Task with ID "${taskId}" not found.`);
    }
}

