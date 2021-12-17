const compareById = (targetId) => (item) => item.id === targetId
 
export const getChats = (state) => state.chats;
export const getChatList = (state) => getChats(state).chats;
export const getChatById = (chatId) => (state) => getChatList(state).filter(compareById(chatId));
export const hasChatById = (chatId) => (state) => getChatList(state).findIndex(compareById(chatId)) !== -1;

/*export const getChats = (state) => state.chats;
export const getChatList = (state) => getChats(state).chats;
export const getChatById = (chatId) => (state) => getChatList(state).filter((chatId));
export const hasChatById = (chatId) => (state) => getChatList(state).findIndex((chatId)) !== -1;*/
