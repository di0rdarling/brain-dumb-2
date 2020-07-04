import React from 'react';
import { makeStyles, Divider, IconButton, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/BorderColor';
import AddIcon from '@material-ui/icons/AddTwoTone';
import BookmarkIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    sideBarBottomContainer: {
        left: 7,
        height: '50%',
    },
    sideBarBottom: {
    },
    sideBarButton: {
        marginBottom: 16
    },
    deleteIcon: {
        '&:hover': {
            color: '#BA2926'
        }
    },
    dividerVertical: {
        margin: '0px 16px'
    },
    bookmarkCheckbox: {
        height: '50%',
        marginBottom: 16,
        height: '20vh'
    }
})

export default function Sidebar(props) {

    let classes = useStyles();
    let { setEditing, isEditing, setAddingContent, deleteNote } = props;
    return (
        <div className={classes.root}>
            <div>
                <div className={classes.bookmarkCheckbox}>
                    <Checkbox
                        icon={<BookmarkIcon />}
                    />
                </div>
                <div className={classes.sideBarBottomContainer}>
                    <div className={classes.sideBarBottom}>
                        <div className={classes.editButton}>
                            <IconButton
                                className={classes.sideBarButton}
                                disabled={isEditing}
                                size='small'
                                onClick={() => setEditing(true)}>
                                <EditIcon />
                            </IconButton>
                        </div>
                        <div className={classes.sideBarButton}>
                            <IconButton
                                onClick={() => setAddingContent(true)}
                                size='small'>
                                <AddIcon />
                            </IconButton>
                        </div>
                        <div className={classes.sideBarButton}>
                            <IconButton
                                onClick={() => deleteNote()}
                                size='small'>
                                <DeleteIcon className={classes.deleteIcon} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Divider className={classes.dividerVertical} orientation='vertical' />
            </div>
        </div>
    )
}