import mongoose, { UpdateQuery } from 'mongoose';

interface IUser extends mongoose.Document {
    id: number;
    name: string;
    email: string;
    password: string;
}

export default IUser;

export interface BaseRepository<T> {
    create(data: T): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T | null>;
    update(id: string, data: UpdateQuery<T>): Promise<T | null>;
    delete(id: string): Promise<T | null>;
    findAllPaginatedWithFilter(
        filter: any,
        page: number,
        limit: number
    ): Promise<T[]>;
}