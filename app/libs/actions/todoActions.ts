'use server';

import { revalidatePath } from 'next/cache';

import Todo from '../models/todomodels';
import connectMongoDB from '../db/mongodb';

export const createTodos = async (formData: FormData) => {
    await connectMongoDB();

    const todo = formData.get('todo') as string;
    const todoDeadlineStr = formData.get('todoDeadline') as string;

    const todoDeadline = new Date(todoDeadlineStr).getTime();

    try {
        const newTodo = await Todo.create({
            todo,
            todoDeadline,
        });
        await newTodo.save();
        revalidatePath('/');
        return newTodo.toString();
    } catch (error) {
        console.error(error);
        return { message: 'error creating todo' };
    }
};

export const deleteTodo = async (id: FormData) => {
    await connectMongoDB();

    const todoId = id.get('id') as string;
    try {
        await Todo.deleteOne({ _id: todoId });
        revalidatePath('/');
        return 'todo deleted';
    } catch (error) {
        console.error(error);
        return { message: 'error deleting todo' };
    }
};