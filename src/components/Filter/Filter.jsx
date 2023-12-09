import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/slice/filterSlice';
import { Input } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.status);
  const onFilterChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <Box
      backgroundColor="red"
      borderRadius="4px"
      display={'flex'}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      pt={'20px'}
      pb={'20px'}
    >
      <FormControl
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        autoComplete="off"
      >
        <Heading as="h3" size="2xl" pb={'20px'} noOfLines={1}>
          Find contacts by name
        </Heading>

        <Input
          type="text"
          name="filter"
          value={filterValue}
          onChange={onFilterChange}
          width={'300px'}
        />
        {/* <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} /> */}
      </FormControl>
    </Box>
  );
};
