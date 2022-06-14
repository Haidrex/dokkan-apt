import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';

const CalcModal = ({ isOpen, onClose, attack }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Calculated ATK</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="5xl" textAlign="center">
            {attack}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CalcModal;
