"use client";
import { Container, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <Container maxW="container.lg">
      <Navbar />
      <Text fontSize={"2xl"} textAlign={"center"} my={4}>
        Search users on Github
      </Text>
    </Container>
  );
}
