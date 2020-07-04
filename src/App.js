import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import './App.css';
import { palette } from './palette';
import NotesTab from './components/tabs/notesTab';
import ReosurcesTab from './components/tabs/resourcesTab';
import { NotesListProvider } from './context/notesContext';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  body: {
    width: '100%'
  },
  sideBarContainer: {
    height: '100vh',
    width: '13vw',
    paddingTop: 74,
    background: palette.primaryColour
  },
  buttonTabActive: {
    backgroundColor: palette.darkPrmaryColour,
    width: '100%',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 15,
    padding: '11px 0px',
    color: palette.secondaryColour
  },
  buttonTab: {
    backgroundColor: palette.primaryColour,
    width: '100%',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 15,
    padding: '11px 0px',
    color: palette.secondaryColour
  }
})



function App() {

  let classes = useStyles();
  let [activeTab, setActiveTab] = useState(0)

  const updateActiveTab = (index) => {
    console.log('clicked')
    setActiveTab(index);
  }

  return (
    <div className={classes.root}>
      <div className={classes.sideBarContainer}>
        <Button className={activeTab === 0 ? classes.buttonTabActive : classes.buttonTab} onClick={() => updateActiveTab(0)}>
          Notes
      </Button>
        <Button className={activeTab === 1 ? classes.buttonTabActive : classes.buttonTab} onClick={() => updateActiveTab(1)}>
          Resources
      </Button>
      </div >
      <div className={classes.body}>
        {activeTab === 0 && (
          <NotesListProvider>
            <NotesTab />
          </NotesListProvider>
        )}
        {activeTab === 1 && (
          <ReosurcesTab />
        )}
      </div>
    </div>
  );
}

export default App;
