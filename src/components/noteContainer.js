import React, { useState } from 'react';
import { makeStyles, Paper, Divider, Typography, IconButton, TextField, Button, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/BorderColor';
import AddIcon from '@material-ui/icons/AddTwoTone';
import BookmarkIcon from '@material-ui/icons/StarBorder';
import Footer from './footer';
import AdditionalNoteContainer from '../additionalNoteContainer';
import { convertToReadableDate } from '../utils/dateUtils'
import { palette } from '../palette';
import { useNotesListDispatch } from '../context/notesContext';
import Sidebar from './sidebar';

const useStyles = makeStyles({
    root: {
        marginBottom: 24,
        padding: 16,
        display: 'flex',
        borderTop: `solid ${palette.primaryColour}`,
    },
    rootActive: {
        marginBottom: 24,
        padding: '24px 16px',
        display: 'flex',
        borderTop: `solid ${palette.warningColour}`,
    },
    title: {
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: 20,
        marginBottom: 8
    },
    dateTime: {
        fontFamily: 'Montserrat',
        fontSize: 12
    },
    content: {
        fontFamily: 'Montserrat',
        letterSpacing: 1
    },
    dividerHorizontal: {
        margin: '8px 0px',
        width: 440
    },

    editingContainer: {
        marginTop: 8
    },
    addContentContainer: {
        marginTop: 24,
        border: `solid thin ${palette.lightGreyColour}`,
        padding: 16,
        borderRadius: 5
    },
    addContentTop: {
        display: 'flex'
    },

})

export default function NoteContainer(props) {

    let classes = useStyles();
    let [isEditing, setEditing] = useState(false);
    let [isAddingContent, setAddingContent] = useState(true);
    let [additionalNote, setAdditionalNote] = useState("");
    let [addAgain, setAddAgain] = useState(false);
    let { note } = props;
    let dispatch = useNotesListDispatch();

    const deleteNote = () => {
        dispatch({
            type: 'delete note',
            id: note.id
        })
    }

    const handleAdditionalNoteInput = (event) => {
        setAdditionalNote(event.target.value)
    }

    const addAdditionaNote = () => {
        if (addAgain) {
            setAdditionalNote("")
        } else {
            setAddingContent(false)
        }
        dispatch({
            type: 'add additional note',
            payload: {
                id: note.id,
                additionalNote: additionalNote
            }
        })
    }

    //TODO: Doesn't work
    const removeAdditionalNote = (index) => {
        console.log(note.addAdditionaNotes)
        dispatch({
            type: 'remove additional note',
            payload: {
                id: note.id,
                additionalNoteContent: note.additionaNotes[index].content
            }
        })
    }

    return (
        <Paper className={(isEditing || isAddingContent) ? classes.rootActive : classes.root}>
            <Sidebar />
            <div>
                <Typography className={classes.title}>{note.title}</Typography>
                <Typography className={classes.dateTime}>Created {convertToReadableDate(note.createdDateTime)} </Typography>
                <Divider className={classes.dividerHorizontal} />
                {isEditing ? (
                    <div className={classes.editingContainer}>
                        <TextField
                            value={note.content}
                        />
                        <Footer cancel={() => setEditing(!isEditing)} />
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.content}>{note.content}</Typography>

                            {note.additionalNotes.length > 0 && (
                                <div>
                                    {note.additionalNotes.map((addNote, index) => (
                                        <AdditionalNoteContainer additionalNote={addNote} remove={() => removeAdditionalNote(index)} />
                                    ))}
                                </div>
                            )}
                            {isAddingContent && !isEditing && (
                                <div className={classes.addContentContainer}>
                                    <div >
                                        <div className={classes.blackDot} />
                                        <div>
                                            <TextField
                                                value={additionalNote}
                                                label='Add content'
                                                onChange={handleAdditionalNoteInput}
                                                fullWidth />
                                        </div>
                                    </div>
                                    <Footer
                                        onChecked={() => setAddAgain(!addAgain)}
                                        cancel={() => setAddingContent(false)}
                                        add={addAdditionaNote} />
                                </div>
                            )}
                        </div>
                    )}
            </div>
        </Paper >
    )
}