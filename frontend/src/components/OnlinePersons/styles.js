import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
   header:{
      marginTop: 20,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 18,
      flexWrap: 'wrap',
      color: '#0e314a',
   },
   pessoasOnline: {
      padding: 8,
      width: '40%'
   },
   pessoas: {
      overflowY: 'auto',
      minHeight: '75%',
      maxHeight: '75%',
      '& > div': {
         marginTop: 10,
         display: 'flex',
         justifyContent: 'flex-start',
         alignItems: 'center'
      }
   },
   buttoms: {
      marginTop: 20,
     color: '#fff',
     backgroundColor: '#0e314a',
     width: '100%',
     '&:hover': {
      backgroundColor: '#0e314a',
      borderColor: '#0062cc',
    },
   }
});