"use client";
import { Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <Container maxW="container.lg">
      <Navbar />
    </Container>
  );
}
