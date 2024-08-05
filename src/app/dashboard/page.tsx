import { Box } from "../ui"; //Fix to had something like this ||import Box from "../ui/box";||

export default function Page() {
    return (
        <>
            <Box height={5} width={5} text="test" />
            <Box height={5} width={5} text="test" />
            <Box height={2} width={2} text="test" />
            <Box height={2} width={10} text="test" />
            <Box height={10} width={2} text="test" />
        </>
    );
}