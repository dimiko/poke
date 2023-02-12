import { Flex, Box } from '@chakra-ui/react'
import React, {useState} from 'react'
import Container from "../components/Container";
import PokeData from "../components/PokeData";
import usePoke from "../hooks/usePoke";
import usePokeSingle from "@/hooks/usePokeSingle";


export default function Home() {
    const { data, isLoading } = usePoke()
    const [sinlgeData, setSinlgeData] = useState([]);
    // const { single } = usePokeSingle(sinlgeData)

    console.log('id ', sinlgeData)

    return (
        <Container>
            <Box as={'h1'} textStyle={'h1'} my={'25px'}>This is the list:</Box>
            <Flex>
                <PokeData data={data} isLoading={isLoading} setSinlgeData={setSinlgeData} />
            </Flex>
        </Container>
    )
}
