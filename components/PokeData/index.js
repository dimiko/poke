import React, { useState, useEffect } from 'react'
import { Box, Link, Flex } from '@chakra-ui/react';
import Loader from "../Loader";

const PokeData = ({ data, isLoading, setSinlgeData }) => {

    const handleId = (id) => {
        setSinlgeData(id.split("/")[6])
    };

    return (
        isLoading ?
            <Loader/> :
            <Box>
                {
                    data?.results?.map((item, index) => {
                        return (
                            <Box key={index} cursor={'pointer'} onClick={()=> handleId(item?.url)}>
                                <Box>{item?.name}</Box>
                            </Box>
                        )
                    })
                }
            </Box>
    )
}

export default PokeData;
