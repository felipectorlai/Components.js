import React from 'react';
import Button from '../src/app/components/Button';
import Link from '../src/app/components/Title';
import './globals.css';

export default function Home() {
  return (
    <main className="flex flex-col intems-center justify-between p-24">
      <title name="Title" />
      <Button>Button Home</Button>
      <Link href="/sobre">Sobre</Link>
    </main>
  )
}