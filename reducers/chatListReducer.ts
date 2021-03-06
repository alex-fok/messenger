import type { ChatList, ChatListAction } from "../types/reducers/chatlistReducer"

const chatListReducer = (state: ChatList, action: ChatListAction):ChatList => {
  console.log('action:', action)
  switch(action.type) {
    case 'incomingMsg': {
      const updated = state.items.get(action.notified)
      if(!updated) return state
      updated['unread']++
      state.items.set(action.notified, updated)
      return {...state}
    }
    case 'newChat': {
      state.items.set(action.chatId, {name: action.name, unread: 1})
      return {...state}
    }
    case 'setActive': {
      if (state.selected === action.chatId) return state 
      state.selected = action.chatId
      return {...state}
    }
    case 'deleteChat': {
      if (state.selected === action.chatId) state.selected = ''
      state.items.delete(action.chatId)
      return {...state}
    }
    case 'rename': {
      state.items.set(action.chatId, {name: action.name, unread: 0})
      state.items.delete(action.tmpId)
      if(state.selected === action.tmpId) state.selected = action.chatId 
      return {...state}
    }
    case 'addTmpChat': {
      state.items.set(action.tmpId, {name: '(new)', unread: 0})
      state.selected = action.tmpId
      return {...state}
    }
    default:
      return state
  }
}

export default chatListReducer
