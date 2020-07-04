import React from 'react';
import { makeStyles, Button, TextField, Paper, Typography } from '@material-ui/core';
import { palette } from '../palette';


const useStyles = makeStyles({
    root: {
        width: 400,
        padding: 24,
        marginBottom: 24,
        borderLeft: `solid ${palette.primaryColour}`
    },
    rootBottom: {
        marginTop: 24,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    text: {
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: 19
    },
    createButton: {
        backgroundColor: palette.primaryColour,
        color: palette.secondaryColour,
        margin: 8
    },
    cancelButton: {
        border: `solid thin ${palette.primaryColour}`,
        margin: 8
    },
    createPopoutTextfield: {
        marginBottom: 16,
    }
})

export default function CreatePopout(props) {

    let classes = useStyles();
    let { closePopout } = props;

    return (
        <Paper className={classes.root}>
            <div>
                <Typography className={classes.text}>Create note</Typography>
            </div>
            <div>
                <div className={classes.createPopoutTextfield}>
                    <TextField
                        fullWidth
                        label='Title'
                    />
                </div>
                <div className={classes.createPopoutTextfield} >
                    <TextField
                        fullWidth
                        label='Content'
                        multiline
                    />
                </div>
            </div>
            <div className={classes.rootBottom}>
                <Button
                    className={classes.cancelButton}
                    onClick={() => closePopout()}
                >CANCEL</Button>
                <Button className={classes.createButton}>CREATE</Button>
            </div>
        </Paper>
    )
}