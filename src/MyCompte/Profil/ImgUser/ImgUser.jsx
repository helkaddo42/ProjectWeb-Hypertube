import React, { Component } from 'react'
import './imgUser.css'
import firebase from './../../../Firebase'
import { toast} from 'react-toastify';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
toast.configure();



class ImgUser extends Component{

    state={
        file: null,
    }



    componentDidMount(){

            let storage = firebase.storage().ref(`${localStorage.getItem('localId')}/images/`);

            storage.listAll()
            .then(function(url) {
                if (url) {
                    let pathImg = url.items[0].location.path_;
                    var pathReference = firebase.storage().ref(`${pathImg}`);
                    pathReference.getDownloadURL()
                    .then(res=>{
                        document.getElementById('picture').src=res
                    })
                }
            })
            .catch(err => {
                this.setState({file : 'https://lebackyard.fr/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'})
                document.getElementById('picture').src=this.state.file

            })

    
    }

    fileImg =(img)=>{ 
        this.setState({ 
            file: img,
        }) }

    SubmitImg=()=>{
        if(this.state.file){
            console.log(this.state.file)
           
            let file = this.state.file[0];
            let storageRef = firebase.storage().ref(`${localStorage.getItem('localId')}/images/${file}`);
            let upload = storageRef.put(file);
            upload.on(firebase.storage.TaskEvent.STATE_CHANGED)
            toast.success(`votre image a bien étè charger`, {position: "top-center", autoClose: 3000, hideProgressBar: false,closeOnClick: true,pauseOnHover: false,progress: undefined})
        }
        else{
            toast.dark(`Aucune image n'a étè selectionner !`, {position: "top-center", autoClose: 3000, hideProgressBar: false,closeOnClick: true,pauseOnHover: false,progress: undefined})

        }
      
    }

    ShowImg =()=>{
        if(this.state.file){

            let file = this.state.file[0];
            let storageRef = firebase.storage().ref();
            storageRef.child(`${localStorage.getItem('localId')}/images/${file}`).getDownloadURL().then(url =>{
                document.getElementById('picture').src=url

            })
        }
        else{
            toast.error(`Aucune image n'a étè charger !`, {position: "top-center", autoClose: 3000, hideProgressBar: false,closeOnClick: true,pauseOnHover: false,progress: undefined})

        }
    }


    render(){
        return (
            <div className='blockPicture' >
                <div className='title'>
                    <h4 style={{color:'white',fontFamily: 'Lexend Peta'}}> Photo </h4>
                </div>
                <div className='content'>
                    <div className='picture'>
                        <img id='picture' alt='ok'></img>
                    </div>
                    <div className='action'>
                        <input id='file' type='file' onChange={e => {this.fileImg(e.target.files) }}/>
                            <label starticon={<AddIcon/>} id='ok' htmlFor='file'> 
                                <i className="material-icons">
                                add_photo_alternate
                                </i> &nbsp;
                                    Choose picture
                            </label>
                        <Button
                            variant="contained"
                            color="default"
                            startIcon={<CloudUploadIcon/>}
                            onClick={this.SubmitImg}
                        >
                            Upload
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<VisibilityIcon/>}
                            onClick={this.ShowImg}
                        >
                            Show
                        </Button>
                    </div>

                </div>
            </div>
    
        )

    }
   
}

export default ImgUser
