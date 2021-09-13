import React from "react";

const styles = {
    item: {border: '1px dashed #ccc' , margin: '5px', padding: '5px', boxShadow: '0 0 10px #ccc'},
    user: {fontSize: '14px'},
    content: {fontSize: '12px'}
}

export default function CmtListItem(props){
    return (
        <div style={styles.item}>
            <h1 style={styles.user}>{props.user} </h1>
            <p style={styles.content}>{props.content}</p>
        </div>
    )
}