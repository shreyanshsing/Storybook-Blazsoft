import React from 'react'
import { makeStyles } from '@material-ui/core';
import { notifData } from './NotificationData';

export default function Notifscreen() {
    const useStyles = makeStyles((theme) => ({

        container: {
            width: "83.5%",
            float: "right",
            overflow: "auto",
            overflowWrap: "break-word",
            padding: "3%",
            paddingTop: "3%",
            background: theme.palette.background.lightDark,
            ['@media (max-width:1024px)']: {
                width: '77%',
                padding: "5%",
                paddingTop: "3%",
            },
            ['@media (max-width:600px)']: {
                width: '100%',
                padding: "5%",
                paddingTop: "5%",
            }
        },
        root: {
            borderRadius: '10px',
            marginBottom: '2px',
            width: '60%',
            marginLeft: '20%',
            //background:theme.palette.background.lightDark
        },
        
            accordianRoot: {
                width: '100%',
                margin: '0.5%',
                borderRadius: '20px',
                backgroundColor: "white",
                border: '2px solid #002C83'
            },
            accordianContent: {
                borderBottom: '1px solid grey',
            },
            deleteButton: {
                position: 'absolute',
                float: 'right',
                color: theme.palette.grey[500],
            },
            addButton: {
                position: 'relative',
                float: 'right',
                marginTop: '1rem',
                marginBottom: '1rem'
            },
            paper: {
                height: '200px',
                width: '100px'
            },
            root2: {
                minWidth: 275,
                borderRadius: '20px'
            },
            bullet: {
                display: 'inline-block',
                margin: '0 2px',
                transform: 'scale(0.8)',
            },
            title: {
                fontSize: 14,
            },
            pos: {
                marginBottom: 12,
            },
            addNotif:{
                float:'right'
            }
        
        }));
    return (
        <div>
            
        </div>
    )
}
