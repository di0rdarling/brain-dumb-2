import React from 'react';
import { makeStyles, Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/CloseTwoTone';
import { convertToReadableDate } from './utils/dateUtils'
import { palette } from './palette'

const useStyles = makeStyles({
    root: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        display: 'flex',
        margin: '12px 8px'
    },
    additionalNoteText: {
        fontFamily: 'Montserrat',
    },
    additionalNoteDateTime: {
        fontSize: 12,
        fontFamily: 'Montserrat',
    },
    additionalNote: {
        border: `solid thin ${palette.tertiaryColour}`,
        backgroundColor: palette.lightGreyColour,
        padding: 8,
        width: '100%',
        borderTop: 'solid 3px #3F3244',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    additionalNoteContainer: {
        display: 'flex',
        margin: '16px 0px'
    },
    blackDot: {
        width: 5,
        height: 5,
        backgroundColor: palette.tertiaryColour,
        borderRadius: '50%',
        marginRight: 16,
        marginTop: 1
    },

})

export default function AdditionalNoteContainer(props) {
    let classes = useStyles();
    let { additionalNote, remove } = props;

    return (
        <div className={classes.root}>
            <div className={classes.blackDot} />
            <div className={classes.additionalNote}>
                <div>
                    <Typography className={classes.additionalNoteDateTime}>Added {convertToReadableDate(additionalNote.createdDateTime)}</Typography>
                    <Typography className={classes.additionalNoteText}>{additionalNote.content}</Typography>
                </div>
                <div>
                    <IconButton
                        onClick={() => remove()}
                        size='small'>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}