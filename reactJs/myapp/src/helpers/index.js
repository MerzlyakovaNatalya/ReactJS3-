import { nanoid } from 'nanoid';

export const compareById = (targetId) => (item) => item.id === targetId;

export const createMessage = (author, text) => ({
    author,
    text,
    id: nanoid(),
})

export const createChat = (name => ({
    name, 
    id: nanoid(),
}))

export const mapChatSnapshotToChat = (snapshot) => ({
    ...snapshot.val(),
    id: snapshot.key,
})

export const mapMessageSnapshotToMessage = (snapshot) => ({
    ...snapshot.val(),
    id: snapshot.key,
})

export const newId = nanoid();