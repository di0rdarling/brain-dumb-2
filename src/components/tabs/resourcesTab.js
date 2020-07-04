import React from 'react';
import { makeStyles } from '@material-ui/core';
import { palette } from '../../palette';
import TabHeader from '../tabHeader';

const useStyles = makeStyles({
    root: {
        padding: '56px 32px 32px',
        alignItems: 'center'
    },
    rootTop: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 32
    },
    rootTopLeft: {
        width: '50%'
    },
    rootTopRight: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    rootBottom: {
        display: 'flex',
        justifyContent: 'center'
    },
    createButton: {
        backgroundColor: palette.primaryColour,
        color: palette.secondaryColour
    },
    createPopoutTextfield: {
        marginBottom: 16
    }
})

export default function Resources() {

    let classes = useStyles();

    return (
        <TabHeader tab={'Resources'} />
    )
}
