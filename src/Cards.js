import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from './data'
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import { position } from '@mui/system';



class Cards extends React.Component {
    constructor(props) {
        super(props);
        
        // Remove property 'messages' from Presentational's local state
        this.state = {
          number: 0
        }
        this.generate = this.generate.bind(this)
      }

      generate(){
        let random;
        this.setState({
            number: Math.floor(Math.random() * 1643)
          });
      }

    render() {
      return (
  <div className='App-header'>
      <Card sx={{ minWidth: 700, maxWidth: 700, p:2, minHeight: 400,borderRadius: '16px',display: "flex",
    flexDirection: "column"}} id="quote-box">
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Quotes by 
        </Typography>
        <Typography id="author" sx={{ mb: 4 }} variant="h5" color="text.secondary" component="div">
        {data[this.state.number].author ? data[this.state.number].author : "Anonymous" }
        </Typography>
        {/* <Container fixed> */}
        <Typography id="text" variant="h5" color="primary">
         {data[this.state.number].text}
        </Typography>
      {/* </Container> */}
      
      </CardContent>
      <CardActions disableSpacing sx={{alignContent: 'space-between',justifyContent: 'center', mt: "auto"}} >
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Button id="new-quote" sx= {{display: 'block',mt:10}} onClick = {this.generate} variant ='outlined' size="medium">Generate New</Button>
        </Grid>


        <Grid item container spacing={2} xs={4} justifyContent= 'flex-end'  bottom ="0" >

        <Grid item xs={4} >
        <Button id="tweet-quote" sx= {{mt:10}} href = "https://twitter.com/intent/tweet" variant ='text' size="medium"><TwitterIcon /></Button>
        </Grid>
            <Grid item xs={4}>
        <Button sx= {{mt:10}} href = "https://twitter.com/intent/tweet" variant ='text' size="medium"><TextFieldsIcon /></Button>
        </Grid>
        
        </Grid>
        

      </Grid>
      {/* <Button sx= {{mt:10}} onClick = {this.generate} variant ='contained' size="medium">Generate New</Button>
      <Button sx= {{mt:10}} href = "https://twitter.com/intent/tweet" variant ='contained' size="medium"><TwitterIcon /></Button> */}
      </CardActions>

    </Card>


    
      </div>
      )
    }
  }

  export default Cards