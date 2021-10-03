import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // Build formData object.
        let formData = new FormData();
        formData.append('operation', 'search');
        console.log(this.state.value)
        formData.append('username', this.state.value);
        const apicall = async () => {
            fetch('http://localhost:5000/search/',
                {
                    method: 'POST',
                    body: formData
                })
                .then((res) => res.json())
                .then( (data) => {
                    this.props.handleChangeuser(data)
                    console.log(this.props.user_id)
                    this.props.handleChangestat(data)
                    this.props.changeSearched()
                })

        }   
        apicall()
    }

    render(){
        return (
            <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic"
                               label="World of Warships Username"
                               variant="outlined" value={this.state.value}
                               onChange={this.handleChange}/>
                </Box>
        <Button variant="contained" onClick={this.handleSubmit.bind(this)}>Submit</Button>
            </div>

    );
    }
}

