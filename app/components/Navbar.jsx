import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import HistoryModal from "./HistoryModal";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex justifyContent={"space-between"} py={6} alignItems={"center"}>
      <Box position={"relative"} aspectRatio={5 / 3} minHeight={20}>
        <Image
          width={120}
          src={"/log.png"}
          fill
          alt="github logo"
          sx={{ filter: "invert(1)" }}
        />
      </Box>
      <Box>
        <Button size="md" colorScheme="whatsapp" onClick={onOpen}>
          Search History
        </Button>
      </Box>

      {isOpen && <HistoryModal isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default Navbar;
