import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useDispatch,useSelector} from 'react-redux';

export default function Searchbar({selector,updateFunction,fetchFunction,setSelectedArray,defaultValue,disabled}) {

    const dispatch = useDispatch();
    const data = useSelector(selector);
    const [value,setValue] = useState(defaultValue ? defaultValue : []);
    const [inputValue,setInputValue] = useState("");
    const [open,setOpen] = useState(false);
    const loading = open && data.length === 0;
    React.useEffect(() => {
        if (!open) {
          dispatch(updateFunction([]));
        }
      }, [open,dispatch,updateFunction]);

    React.useEffect(() => {
        if (!loading) {
          return undefined;
        }
        (() => {
          dispatch(fetchFunction())
        })();
    }, [loading,fetchFunction,dispatch]);

  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      open={open}
      disabled={disabled}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      filterSelectedOptions
      options={data}
      value={value}
      onChange={(event, newValue) => {
        console.log(newValue)
        newValue.length >0 ? dispatch(setSelectedArray(newValue[newValue.length-1])) : dispatch(setSelectedArray(""))
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={(option) => option.firstName}
      renderInput={(params) => (
        <TextField {...params} 
            label="Search" 
            variant="outlined" 
            margin="dense"
            disabled={disabled}
            placeholder="type first four character's" 
            InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}/>
      )}
    />
  );
}

