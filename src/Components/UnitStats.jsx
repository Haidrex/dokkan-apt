import React from 'react';
import { Box, Input, FormControl, FormLabel, HStack } from '@chakra-ui/react';

const UnitStats = ({ handleChange }) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius={10}
      p="20px"
      mb="10px"
    >
      <HStack>
        <FormControl>
          <FormLabel>Attack</FormLabel>
          <Input
            name="attack"
            onChange={handleChange}
            placeholder="Attack stat"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Defence</FormLabel>
          <Input
            name="defence"
            onChange={handleChange}
            placeholder="Defence stat"
          />
        </FormControl>
      </HStack>
    </Box>
  );
};

export default UnitStats;
