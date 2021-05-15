import { makeStyles } from '@material-ui/core/styles';

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
   logo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& strong': {
         marginLeft: 14
      }
   },
   titleRoom: {
      marginTop: 8,
      fontSize: 18,
      color: '#0e314a',
   },
   root: {
      minWidth: 275,
      marginTop: 12,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column'
    },
   containerChat: {
      height: 500,
      maxWidth: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 'solid 1px #0e314a'
   },
   bottom: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: 100
   },
   buttomSend: {
     marginLeft: 5,
     color: '#fff',
     backgroundColor: '#0e314a',
     '&:hover': {
      backgroundColor: '#0e314a',
      borderColor: '#0062cc'
    },
   },
   textfield: {
      paddingTop: 5,
      width: '100%',
      height: 60,
      color: '#0e314a',
      '& label.Mui-focused': {
         color: '#0e314a',
       },
       '& .MuiInput-underline:after': {
         borderBottomColor: '#0e314a',
       },
       '& .MuiOutlinedInput-root': {
         '& fieldset': {
           borderColor: '#fff',
         },
         '&:hover fieldset': {
           borderColor: '#0e314a',
         },
         '&.Mui-focused fieldset': {
           borderColor: '#0e314a',
         },
       },
   }
 });
