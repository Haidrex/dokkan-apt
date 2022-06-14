import React from 'react';
import { Box, FormControl, FormLabel } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { AllLinks } from '../docs/AllLinks';

const Links = () => {
  return (
    <Box border="1px" borderColor="gray.200" borderRadius={10} p="20px">
      <FormControl>
        <FormLabel>Links Active</FormLabel>
        <Select
          isMulti
          name="links"
          options={AllLinks}
          placeholder="Select active links..."
          closeMenuOnSelect={false}
        />
      </FormControl>
    </Box>
  );
};

export default Links;
