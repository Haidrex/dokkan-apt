import React from 'react';
import { Box, Input, FormControl, FormLabel } from '@chakra-ui/react';

const Passive = ({ handleChange }) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius={10}
      p="20px"
      mb="10px"
    >
      <FormControl>
        <FormLabel>Support</FormLabel>
        <Input
          name="support"
          onChange={handleChange}
          placeholder="Support procentage"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Passive</FormLabel>
        <Input
          name="passive"
          onChange={handleChange}
          placeholder="Full passive"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Ki Multiplier</FormLabel>
        <Input
          name="kiMulti"
          onChange={handleChange}
          placeholder="Ki Multiplier"
        />
      </FormControl>
    </Box>
  );
};

export default Passive;
