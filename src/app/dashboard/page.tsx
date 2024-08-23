'use client'

import React from "react";
import { Box, Modal, Title } from "../ui"; //Fix to had something like this ||import Box from "../ui/box";||

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
            <Box height={12} width={6} />
            <Box height={3} width={3}>
                <button onClick={() => {ref.current?.showModal()}}>Afficher la fenêtre</button>
                <Modal reference={ref}>
                    <p>Test Modal</p>
                    <button onClick={() => {ref.current?.close()}}>Fermer à fenetre</button>    
                </Modal>
            </Box>
            <Box height={9} width={3}>
            </Box>
            <Box height={9} width={3}>
                <div className='flex flex-col mt-4'>
                    <div className='flex flex-rox align-between ml-4'>
                        <Title size='24px'>Flow du mois</Title>
                    </div>
                </div>
            </Box>
        </>
    );
}