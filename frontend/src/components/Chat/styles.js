import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
   chat: {
      minHeight: '100%',
      width: '80%',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      background: '',
      '& > section': {
         marginTop: 10,
      },
      overflowY: 'auto',
      '& * p': {
         margin: 5,
         color: '#0e314a',
         backgroundColor: '#FFF',
      }
   },
   info: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
   }
});

