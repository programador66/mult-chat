import { makeStyles } from '@material-ui/core/styles';

 export const useStyles = makeStyles({
   root: {
     minWidth: 275,
     marginTop: 12,
     display: 'flex',
     justifyContent: 'space-between',
     alignItems: 'center'
   },
   bullet: {
     display: 'inline-block',
     margin: '0 2px',
     transform: 'scale(0.8)',
   },
   title: {
    color: '#0e314a',
   },
   pos: {
     marginBottom: 12,
   },
   buttoms: {
     color: '#fff',
     backgroundColor: '#0e314a',
     '&:hover': {
      backgroundColor: '#0e314a',
      borderColor: '#0062cc',
    },
   }
 });
