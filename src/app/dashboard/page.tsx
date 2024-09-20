'use client'

import React from "react";
import {Box, Icon, Modal, Progress, Tag, Title} from '@/components'; //Fix to had something like this ||import Box from "../ui/box";||
import {User} from "@/app/dashboard/user/user";

export default function Page() {
    const ref = React.useRef<HTMLDialogElement>();

    return (
        <>
            <Box height={3} width={3}>
                <div className='flex flex-col items-center justify-center h-full'>
                    <Title color='gray' size='24px'>Current Flow</Title>
                    <Title size='32px'>800,73€</Title>
                </div>
            </Box>
            <Box height={12} width={6}>
                <button onClick={() => {
                    ref.current?.showModal()
                }}>Afficher la fenêtre
                </button>
                <Modal reference={ref}>
                    <p>Test Modal</p>
                    <button onClick={() => {
                        ref.current?.close()
                    }}>Fermer à fenetre
                    </button>
                </Modal>
            </Box>
            <Box height={3} width={3}>
                <div className={'h-full'}>
                    <div className={'flex justify-center flex-col mx-4 h-full'}>
                        <div className={'flex items-center'}>
                            <User/>
                        </div>
                        <button className={'mt-2'}>Edit user</button>
                    </div>
                </div>
            </Box>
            <Box height={9} width={3}>
                <Progress value={50}></Progress>
            </Box>
            <Box height={9} width={3}>
                <div className='flex flex-col mt-4 mx-4'>
                    <div className='flex items-center justify-between mb-4'>
                        <Title size='24px'>Flow du mois</Title>
                        <Icon name='bx-plus' color='dark-gray'></Icon>
                    </div>
                    <div className='flex justify-between'>
                        <p>-90€ sample <Tag>Category</Tag></p>
                        <Icon name='bx-edit' color='gray'></Icon>
                    </div>
                    <div className='flex justify-between'>
                        <p>+190€ sample <Tag color='blue'>Category</Tag></p>
                        <Icon name='bx-edit' color='gray'></Icon>
                    </div>
                    <div className='flex justify-between'>
                        <p>+190€ sample <Tag color='light-blue'>Category</Tag></p>
                        <Icon name='bx-edit' color='gray'></Icon>
                    </div>
                    <div className='flex justify-between'>
                        <p>+190€ sample <Tag color='green'>Category</Tag></p>
                        <Icon name='bx-edit' color='gray'></Icon>
                    </div>
                    <div className='flex justify-between'>
                        <p>+190€ sample <Tag color='orange'>Category</Tag></p>
                        <Icon name='bx-edit' color='gray'></Icon>
                    </div>
                    <div className='flex justify-between'>
                        <p>+190€ sample <Tag color='red'>Category</Tag></p>
                        <Icon name='bx-edit' color='gray'></Icon>
                    </div>
                    <div className='flex justify-between'>
                        <p>+190€ sample <Tag color='pink'>Category</Tag></p>
                        <Icon name='bx-edit' color='gray'></Icon>
                    </div>
                    <div className='flex justify-between'>
                        <p>+190€ sample <Tag color='purple'>Category</Tag></p>
                        <Icon name='bx-edit' color='gray'></Icon>
                    </div>
                    <div className='flex justify-between'>
                        <p>+190€ sample <Tag color='yellow'>Category</Tag></p>
                        <Icon name='bx-edit' color='gray'></Icon>
                    </div>
                    <div className='flex justify-between'>
                        <p>+190€ sample <Tag color='cyan'>Category</Tag></p>
                        <Icon name='bx-edit' color='gray'></Icon>
                    </div>
                    <div className='flex justify-between'>
                        <p>+190€ sample <Tag color='lime'>Category</Tag></p>
                        <Icon name='bx-edit' color='gray'></Icon>
                    </div>
                    <div className='flex justify-between'>
                        <p>+190€ sample <Tag color='brown'>Category</Tag></p>
                        <Icon name='bx-edit' color='gray'></Icon>
                    </div>
                    <div className='flex justify-between'>
                        <p>+190€ sample <Tag color='teal'>Category</Tag></p>
                        <Icon name='bx-edit' color='gray'></Icon>
                    </div>
                </div>
            </Box>
        </>
    );
}