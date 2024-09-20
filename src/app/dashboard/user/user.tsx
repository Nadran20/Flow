import Image from "next/image";
import {Icon} from "@/components";
import React, {useEffect, useState} from "react";
import {User as UserInterface, getUser} from "@/lib/services/user-service";

export const User = () => {
    const [user, setUser] = useState<UserInterface>();

    useEffect(() => {
        getUser().then(data => setUser(data));
    }, []);

    return (
        <>
            <div>
                <h2><b>{user?.name}</b></h2>
                <h3 className={'text-slate-500'}>{user?.email}</h3>
            </div>
            {user?.picture ?
                <Image
                    src={user.picture}
                    className={'rounded-full'}
                    alt={user.name}
                    width={50}
                    height={50}
                    style={{maxHeight: '50px'}}
                /> :
                <Icon name={'bxs-user-circle'} size={'50px'} color={'#01162a'}></Icon>}
        </>
    );
}