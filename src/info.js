import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {//useEffect가 언제 실행되는지 파악한다
        //업데이트가 될때마다 f12 Console에 나타난다
        console.log('렌더링 완료');
        console.log({
            name,
            nickname,
        });
    });
    // useEffect(() => {//useEffect가 언제 실행되는지 파악한다
    //     cojmponentdidmount, componentdidupdate 두 가지 역할을 하는 함수
    //     nickname이 업데이트가 될때마다 f12 Console에 나타난다
    //     console.log('렌더링 완료');
    //     console.log({
    //         nickname,
    //     });
    // }, [nickname]);
    //두 번째 인자를 적어놓으면 두 번째 인자가 업데이트될때만 렌더링한다

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return(
        <div>
            <div>
                <input name="name" value={name} onChange={onChangeName}/>
                <input name="nickname" value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름: </b>{name}
                </div>
                <div>
                    <b>닉네임: </b>{nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;