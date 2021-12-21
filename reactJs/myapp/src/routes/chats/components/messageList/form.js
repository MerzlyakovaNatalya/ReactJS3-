import {useState, useCallback, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const Form = ({onSubmitMessage}) => {

    const [text, setText] = useState(''); 

    const onChange = useCallback((event) => {
        setText(event.target.value);
     }, []);


    return (<div>
            <form noValidate autoComplete="off" onSubmit={onSubmitMessage}>
            <TextField
              type="text"
              value={text}
              onChange={onChange}
              label="Cообщение"
              variant="outlined"
              color="secondary"
              sx={{marginBottom: 2,
                   marginTop: 2,
                   outline: 0
                  }}
            />
              <Button 
              type="submit"
              color="secondary"
              variant="contained"
              sx={{
                marginLeft: 1,
                marginTop: 4.3
            }}
              >
                Отправить
              </Button>
            </form>
        </div>)
}
