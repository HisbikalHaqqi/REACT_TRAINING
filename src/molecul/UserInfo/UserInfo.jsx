import React from 'react'
import Image from '../../atom/Image'
import Label from '../../atom/Label'

const UserInfo = (props) => {
    let img = ""
    if(props.isSuper === "true"){
        img = "https://img.okezone.com/content/2018/03/13/598/1872062/belum-tamat-dragon-ball-super-akan-dibuat-lanjutannya-v8ezlIamBS.jpg"
    }
    else{
        img = "https://cdn.antaranews.com/cache/800x533/2019/02/20/D0D1E72E-A69E-4A95-B528-08D77973BBF0.jpeg"
    }

    return (
        <div className="Comment">\
            <Image src={img}/>
            <div className="UserInfo-name">
                Hisbikal Haqqi Muflihin
            </div>
            <Label>True Love</Label>
            <Label>2021 - 07 -31</Label>
        </div>
    )
   
}

export default UserInfo