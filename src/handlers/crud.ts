import { db } from '../utils/db';

export const crud = {
  async createItem(item: Record<string, any>) {
    return db.putItem(item);
  },
  async getItem(id: string) {
    return db.getItem(id);
  },
  async deleteItem(id: string) {
    return db.deleteItem(id);
  },
};
