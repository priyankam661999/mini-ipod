import React from "react";

class Games extends React.Component{
    render(){
        return(
        <div style={styles.settings}>
            <div style={styles.titleBar}>
                <p style={{fontWeight:'bold'}}>Ipod</p>
                <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/664/664886.png" alt="no internet"></img>
            </div>
            <div style={{width: '100%', height : '90%' }}>
                <img style={styles.image} src="https://tse3.mm.bing.net/th?id=OIP.DtLTPnNlxucNk8ZEjX-ltwHaHa&pid=Api&P=0" alt="no internet"></img>
            </div>
        </div>
        );
    }
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'100%',
        height:'100%',
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
export default Games;