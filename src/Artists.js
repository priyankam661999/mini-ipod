import React from "react";
import artistImg from "./assets/images/adele-easy-on-me.jpg";
class Artists extends React.Component{
    render(){
        return(
            <div style={styles.artistsContainer}>
                <div style={styles.titleBar}>
                <p style={{fontWeight:'bold'}}>iPod</p>
                    <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/664/664886.png" alt="no internet"></img>

                </div>
                <div style={styles.info}>
                    <div style={styles.imageContainer}>

                    </div>
                    <div style={styles.subInfo}>
                            <h4 style={{marginBottom:'0.5rem'}}>MiniIpod.js<span><img style={styles.image} src="https://cdn-icons-png.flaticon.com/512/6016/6016741.png" alt="no internet"></img> </span> </h4>
                        <p style={{marginBottom:'0'}}>React Project</p>
                    </div>
                </div>
            

            </div>
        );
    }
}
const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    imageContainer : {
        height : '65%',
        width : '35%',
        borderRadius : '50%',
        backgroundImage : `url(${artistImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignSelf : 'center'
    },
    image : {
        width: '2rem',
        height : '2rem'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },

    subInfo : {
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}

export default Artists;  
