import React, { useEffect } from 'react';

const NotesListStateContext = React.createContext(undefined);
const NotesListDispatchContext = React.createContext(undefined);

function themeReducer(state, action) {

    switch (action.type) {
        case 'set notes':
            return action.payload;
        case 'create note':
            return action.payload;
        case 'delete note':
            let newNotes = state.filter((note) => note.id !== action.id)
            return newNotes;
        case 'add additional note':
            let notesCopyAdd = state.slice();
            //Find the parent note.
            let foundNoteAdd = notesCopyAdd.find(note => note.id === action.payload.id);
            let foundNoteAddIndex = notesCopyAdd.indexOf(foundNoteAdd);
            //Remove the parent note from the list.
            notesCopyAdd.splice(foundNoteAddIndex, 1);
            //Update the parent note.
            foundNoteAdd.additionalNotes = [{ createdDateTime: new Date().toISOString(), content: action.payload.additionalNote }, ...foundNoteAdd.additionalNotes]
            notesCopyAdd.push(foundNoteAdd);
            //Sort the new array by id in ascending order.
            notesCopyAdd.sort((a, b) => {
                return a.id - b.id;
            })
            return notesCopyAdd;
        case 'remove additional note':
            let notesCopyRemove = state.slice();
            //Find the parent note.
            let foundNoteRemove = notesCopyRemove.find(note => note.id === action.payload.id);
            let foundNoteRemoveIndex = notesCopyRemove.indexOf(foundNoteRemove);
            //Remove the parent note from the list.
            notesCopyRemove.splice(foundNoteRemoveIndex, 1);
            foundNoteRemove.additionalNotes.splice(foundNoteRemove.additionalNotes.indexOf(action.payload.additionalNoteContent))
            //Sort the new array by id in ascending order.
            notesCopyRemove.sort((a, b) => {
                return a.id - b.id;
            })
            return notesCopyRemove;
    }
}

export function NotesListProvider(props) {

    const [state, dispatch] = React.useReducer(themeReducer, []);

    let notes = [{
        id: 2,
        title: 'Note title two',
        content: 'Note content two',
        createdDateTime: new Date().toISOString(),
        additionalNotes: [{
            createdDateTime: new Date().toDateString(),
            content: 'This is some more.'
        }, {
            createdDateTime: new Date().toDateString(),
            content: 'Here we are'
        }]
    }, {
        id: 3,
        title: 'Note title',
        content: 'Note content',
        createdDateTime: new Date().toISOString(),
        additionalNotes: [{ createdDateTime: new Date().toISOString(), content: 'This is some addtional notes.' }]
    }, {
        id: 1,
        title: 'This should be a better title',
        content: 'Note content two',
        createdDateTime: new Date().toISOString(),
        additionalNotes: [{
            createdDateTime: new Date().toDateString(),
            content: 'This is some more.'
        }, {
            createdDateTime: new Date().toDateString(),
            content: 'Here we are'
        }]
    }]

    useEffect(() => {
        notes.sort((a, b) => {
            return a.id - b.id;
        })
        dispatch({
            type: 'set notes',
            payload: notes
        })
    }, [])

    return (
        <NotesListStateContext.Provider value={state}>
            <NotesListDispatchContext.Provider value={dispatch}>
                {props.children}
            </NotesListDispatchContext.Provider>
        </NotesListStateContext.Provider>
    )

}

export function useNotesListState() {
    const context = React.useContext(NotesListStateContext)
    if (context === undefined) {
        throw new Error('useNotesListState must be used within a NotesListProvider')
    }
    return context
}

export function useNotesListDispatch() {
    const context = React.useContext(NotesListDispatchContext)
    if (context === undefined) {
        throw new Error('useNotesListDispatch must be used within a NotesListProvider')
    }
    return context
}