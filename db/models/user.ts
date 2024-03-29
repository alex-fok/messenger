import { ObjectId } from 'mongodb'
import type { ChatMetaDB, User as UserInterface } from 'types/db/models/user'

export default class User implements UserInterface {
  constructor(
    public username:string,
    public password:string,
    public nickname:string,
    public lastModified: number,
    public chats:Record<string, ChatMetaDB> = {},
    public _id:ObjectId = new ObjectId()) {}
}
