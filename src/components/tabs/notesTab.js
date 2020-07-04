import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useNotesListState } from '../../context/notesContext';
import TabHeader from '../tabHeader';
import NoteContainer from '../noteContainer';

const useStyles = makeStyles({
    root: {
        padding: '76px 32px 32px',
        alignItems: 'center'
    },
    body: {
        display: 'flex',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'Montserrat'
    }
})

export default function NotesTab() {

    let classes = useStyles();
    let notes = useNotesListState();

    return (
        <div className={classes.root}>
            <TabHeader tab={'Notes'} />
            <div className={classes.body}>
                <div>
                    {notes && notes.length > 0 ? (
                        notes.map(note => (
                            <NoteContainer note={note} />
                        ))
                    ) : (
                            <Typography className={classes.text}>You have no more notes!</Typography>

                        )}
                </div>
            </div>
        </div>
    )

}